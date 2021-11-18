import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Context/useAuth';
import Header from '../Header/Header';
import loginpic from '../../asset/image/login.png';

const Register = () => {
const { register, handleSubmit, watch, formState: { errors } } =useForm();
    const {error,user,setIsloading,setUser,Registeruser,SigninWithGoogle} = useAuth();
    const [passerror,setPasserror] = useState('')

    const History = useHistory();
    const location = useLocation();
    const Redirectui = location.state?.from  || '/';
    
    const onSubmit = data =>{
        const {name,email,password,password2} = data;
        if(password.length >= 6)
        {
            if(password === password2)
            {
                Registeruser(email,password,name,History)
            }
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
            <Header></Header>
        <Row className="justify-content-center mt-4 gap-2">
        {
                   user.email ? <h2 className="text-success">Successfully Registered <i className="far fa-check-circle fa-4x"></i></h2>
                   :

            <Col lg={6} md={12} sm={12} className="login-form">
                   <form onSubmit={handleSubmit(onSubmit)} >
                   <h2 className="title text-center my-4">Create <img className="w-25  mb-4" src="" alt="" /> Account</h2>
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

                           <label htmlFor="">Re-Enter Password</label>
                           <input className="w-100" type ="password" {...register("password2", { required: true, min:6,})} />
                           {errors.password && <p className="text-danger">This field is required</p>}
                           <p className="text-danger">{passerror}</p>
                           
                       <input className="mb-3" type="submit" value="Sign Up" />
               </form>
               <h2>OR</h2>
               <h5 className="mb-3 text-dark fw-bold">Register in with</h5>
                <i onClick={GooglesigninHandler}  className="ms-2 mb-2 fab fa-google fa-3x"></i>
                <p className="mb-3 mt-3">Already Have an Account ?</p>
                <p className="fs-5 fw-bold" ><Link to="/login" >Log in</Link></p>
            </Col>
        }
            <Col lg={4} md={4} sm={12}>
                <img className="w-100 h-100" src={loginpic} alt="" />
            </Col>
        </Row>
   </div>
    );
};

export default Register;

