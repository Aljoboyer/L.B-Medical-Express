import React, { useState } from 'react';
import {Col, Row} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const Contactform = ({services,children}) => {
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
    const {img,price} = services;
   
    const onSubmit = data => {
        data.status = 'Pending';
        data.price = price;
        data.category = 'Service'
        data.postdate = new Date().toLocaleDateString()
        fetch('https://obscure-caverns-42480.herokuapp.com/appointments', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(service => {
            if(service.insertedId)
            {
                Swal.fire(
                    'Your Request Sended',
                    'Please Wait We will Response',
                    'success'
                  )
                reset()
            }
        })
        
    }
    return (
        <div className="container-fluid forms">
        <Row className="justify-content-center" >
            <Col lg={8} md={6} sm={12} className="login-form mt-4 p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="title text-center">Fill Up Your Form</h2>
                        <label htmlFor="">Patient Name</label>
                        <input className="w-100" type="text" {...register("patientname", { required: true })} />
                        {children}
                        <label htmlFor="">Patient Location</label>
                        <input className="w-100" type="text" {...register("location", { required: true })} />

                        <label htmlFor="">Email</label>
                        <input className="w-100" type="email" {...register("email", { required: true })} />

                        <label htmlFor="">Phone Number</label>
                        <input className="w-100" type ="number" {...register("number", { required: true })} />

                        <label htmlFor="">Service Name</label>
                        <input className="w-100" type ="text" {...register("servicename", { required: true })} />

                        <label htmlFor="">Describe Concisly Your Problem</label>
                        <input className="w-100" type="text" {...register("suffix", { required: true })} />

                        <input className="buttonss" type="submit" value="Send" />
                </form>

            </Col>
        </Row>

    </div>
    );
};

export default Contactform;