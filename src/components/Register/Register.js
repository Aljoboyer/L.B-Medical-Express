import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Context/useAuth';
const Register = () => {
const { register, handleSubmit, watch, formState: { errors } } =useForm();
    const {error,user,setIsloading,setUser,Registeruser,SigninWithGoogle} = useAuth();
    const [passerror,setPasserror] = useState('')

    const History = useHistory();
    const location = useLocation();
    const Redirectui = location.state?.from  || '/';
    
    const onSubmit = data =>{
        const {name,email,password} = data;
        if(password.length >= 6)
        {
            Registeruser(email,password,name)
        }
        else{
            setPasserror('password shold contain minimum 6character long')
        }
    }
    const GooglesigninHandler = () => {
        setIsloading(true)
        SigninWithGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user)
            History.push(Redirectui)
        }).finally(() => setIsloading(false))
    }
    return (
        <div className="container-fluid">
        <Row className="justify-content-center mt-4">
            <Col lg={6} md={12} sm={12} className="login-form">
               {
                   user.email ? <h2 className="text-success">Successfully Registered <i className="far fa-check-circle fa-4x"></i></h2>
                   :
                   <form onSubmit={handleSubmit(onSubmit)} >
                   <h2 className="title text-center mt-1">Create <img className="w-25  mb-4" src="" alt="" /> Account</h2>
                   <p className="text-danger">{error}</p>
                               <label htmlFor="">Name</label>
                               <input className="w-100" type ="text" {...register("name", { required: true })} />
                           {errors.name && <p className="text-danger">This field is required</p>}

                           <label htmlFor="">Email</label>
                           <input className="w-100" type="email" {...register("email", { required: true })} />
                           {errors.email && <p className="text-danger">This field is required</p>}

                           <label htmlFor="">Password</label>
                           <input className="w-100" type ="password" {...register("password", { required: true, min:6,})} />
                           {errors.password && <p className="text-danger">This field is required</p>}
                           <p className="text-danger">{passerror}</p>
                           
                       <input className="mb-3" type="submit" value="Sign Up" />
                       <h5 className="mb-3 text-dark fw-bold">Register in with</h5>
                       <i onClick={GooglesigninHandler}  className="ms-2 mb-2 fab fa-google fa-3x"></i>
                       <p className="mb-3 mt-3">Already Have an Account ?</p>
                       <p className="fs-5 fw-bold" ><Link to="/login" >Log in</Link></p>
               </form>
               
               }
            </Col>
        </Row>
   </div>
    );
};

export default Register;

