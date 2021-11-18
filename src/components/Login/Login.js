import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link , useHistory, useLocation} from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Login.css';
import useAuth from '../../Context/useAuth';
import Header from '../Header/Header';
import loginpic from '../../asset/image/login.png'
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error,setError] = useState('')
    const {LoginWithEmailandPassword,setIsloading,SigninWithGoogle,setUser} = useAuth();

    const History = useHistory();
    const location = useLocation();
    const Redirectui = location.state?.from  || '/';

    const onSubmit = data => {

        const {email,password} = data;
        setIsloading(true)
        LoginWithEmailandPassword(email,password)
        .then((result) => {
            const user = result.user;
            setUser(user)
           History.push(Redirectui)
        })
        .catch((error) => {
            setError('Your Email or Password is wrong')
        }).finally(() => setIsloading(false))
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
        <div className="container-fluid parent">
            <Header></Header>
        <Row className="justify-content-center" >
            <Col lg={6} md={8} sm={12} className="login-form mt-4 p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="title text-center">Log-in Here LB</h2>
                <p className="text-danger"><b>{error}</b></p>
                        <label htmlFor="">Email</label>
                        <input className="w-100" type="email" {...register("email", { required: true })} />
                        <label htmlFor="">Password</label>
                        <input className="w-100" type ="password" {...register("password", { required: true })} />
                        <p><i className=""></i></p>

                        {errors.exampleRequired && <span>This field is required</span>}
        
                        <input type="submit" value="Login" />
                </form>
                <Link to="/reset" className="fs-bold" ><b>Forgot Password ?</b></Link>
                <p><i className="mt-3 mb-2 text-center far fa-circle fa-2x">R</i></p>
                <h5 className="mb-3 text-dark fw-bold">Sign in with</h5>
                <i onClick={GooglesigninHandler}  className="ms-2 fab fa-google fa-3x"></i>
                <p className="mt-3 fw-bold" ><small>New to Our Site?</small></p>
               <p className="fs-5 fw-bold" > <Link to="/register" >Create  Account</Link></p>
            </Col>
            <Col lg={4} md={4} sm={12}>
                <img className="w-100 h-100" src={loginpic} alt="" />
            </Col>
        </Row>
    </div>
    );
};

export default Login;