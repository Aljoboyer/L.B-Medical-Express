import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Checkoutform from './Checkoutform';

const stripePromise =  loadStripe('pk_test_51Jw2mpBSwbB9BMbhsyE9VsMWMbgeGoz35VdXDYoB2C1QGFkx7JTaEG4FFXG3pyBkqupeooBX2z3nPu0zERZuO1Tw00ZtAW0Wtx');
const Payments = () => {
    const {id} = useParams();
    const [paydata,setPaydata] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/payappointment/${id}`)
        .then(res => res.json())
        .then(data => setPaydata(data))
    },[id])
    return (
        <div className="container-fluid">
            <Header></Header>
            <h2 className="text-primary text-center my-4">{paydata.patientname} Please Pay Your Bill </h2>
            <h5 className="fw-bold text-center">Bill: $-{paydata.price} </h5>
            <Row className="d-flex justify-content-center align-items-center">
                <Col lg={5} sm={8} md={12}>
                    {
                        paydata.price &&  <Elements stripe={stripePromise}>
                        <Checkoutform paydata={paydata}/>
                        </Elements> 
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Payments;