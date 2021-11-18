import {getIdToken,updateProfile,sendPasswordResetEmail,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialization from '../Firebase/Firebaseinit';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

FirebaseInitialization()
const useFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const [user,setUser] = useState({});
    const auth = getAuth();
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState('');
    const [isadmin, setIsadmin] = useState(false)
    //creating user 
    const Registeruser = (email,password,name,History) => {
        setIsloading(true)
    createUserWithEmailAndPassword(auth, email, password,name)
    .then((result) => {
        const user = result.user;
        setUser(user)
        NamenadImgSet(name)

        //saving user to data base
        SaveUser(email,name)

        History.push('/')
        Swal.fire(
          'Register Successfully',
          'Welcome To LB Medical',
          'success'
        )
        })
    .catch((error) => {
        setError('Email is Already Exists please try another one or go to Log in')
    }).finally(() => setIsloading(false))
    }
    //sign in with Email and password'
    const LoginWithEmailandPassword = (email, password) => {
        setIsloading(true)
       return signInWithEmailAndPassword(auth, email, password)
            
    }
      //google sign in
      const SigninWithGoogle = () => {
       
        return signInWithPopup(auth, googleprovider)
        
    }
    //current user getting 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              getIdToken(user).then(idtoken => localStorage.setItem('idtoken', idtoken))
              setUser(user);
            } else {
              setUser({})
            }
            setIsloading(false)
          });
    },[auth])
    //Log out user
    const Logout = () => {
        
        signOut(auth).then(() => {
            setUser({})
            setIsadmin(false)
          }).catch((error) => {
            // An error happened.
          })
    }
  //password reset email
  const PasswordReset = (email) => {
    sendPasswordResetEmail(auth, email)
    .then(() => {

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  //name and img set
      const NamenadImgSet = (name,url) => {
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
      }

    //getting is admin
      useEffect(() => {
        if(user.email)
        {
          fetch(`http://localhost:5000/admincheck?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setIsadmin(data.admin)
        })
        }
      },[user.email])

      //saving user to data base
      const SaveUser = (email, name) =>{
        const newuser = {email, name}
        fetch('http://localhost:5000/users',{
          method: 'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(newuser)
        })
        .then(res => res.json())
        .then(data => console.log(data))
      }
    return{
        SigninWithGoogle,
        Registeruser,
        LoginWithEmailandPassword,
        Logout,
        user,
        isloading,
        PasswordReset,
        setUser,
        setIsloading,
        error,
        isadmin,
        setIsadmin
    }
}

export default useFirebase;