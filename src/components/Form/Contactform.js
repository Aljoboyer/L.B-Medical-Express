import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Contactform = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div className="container-fluid forms">
        <Row className="justify-content-center" >
            <Col lg={8} md={6} sm={12} className="login-form mt-4 p-4">
            <form>
                <h2 className="title text-center">Fill Up Your Form</h2>
                        <label htmlFor="">Name</label>
                        <input className="w-100" type="text" {...register("text", { required: true })} />
                        {props.children}
                        <label htmlFor="">Location</label>
                        <input className="w-100" type="text" {...register("location", { required: true })} />

                        <label htmlFor="">Email</label>
                        <input className="w-100" type="email" {...register("email", { required: true })} />

                        <label htmlFor="">Phone Number</label>
                        <input className="w-100" type ="number" {...register("number", { required: true })} />

                        <label htmlFor="">Describe Concisly Your Problem</label>
                        <input className="w-100" type="text" {...register("text", { required: true })} />

                        <input className="buttonss" type="button" value="Send" />
                </form>

            </Col>
        </Row>
    </div>
    );
};

export default Contactform;