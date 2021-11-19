import React, { useEffect } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import ServicesUse from '../Hook/Hook';
import './Detials.css';
import {Button} from 'react-bootstrap';
import Contactform from '../Form/Contactform';
import Header from '../Header/Header';
import useAuth from '../../Context/useAuth';


const Details = () => {
    const {services,setServices} = ServicesUse();
    const {serviceID} = useParams();
    const {user} = useAuth()

    useEffect(() => {
        fetch(`https://obscure-caverns-42480.herokuapp.com/services/${serviceID}`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[services,serviceID])
   
    return (
        <div className="container-fluid">
            <Header></Header>
            {
                services ?    <Row className="justify-content-evenly mt-4 h-100">
                    <Col lg={6} sm={12} md={6} className="text-center p-3">
                    <img className="rounded" width="300px" height="300px" src={`data:image/jpeg;base64,${services.img}`} alt="" />
                    <div className="mt-3 ">
                    <h2 className="fw-bold" >{services.name}</h2>
                    <h5>{services.short}</h5>
                    <p>{services.details}</p>
                    </div>
                    </Col>
                    <Col lg={6} sm={12} md={6}>
                        <h1 className="title text-center text-success">To Book This Service</h1>
                    <Contactform services={services}></Contactform>
                    </Col>
            </Row> :   <Spinner animation="border" variant="dark" />
 
            }
     </div>
    );
};

export default Details;