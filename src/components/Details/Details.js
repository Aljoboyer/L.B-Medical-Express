import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import ServicesUse from '../Hook/Hook';
import './Detials.css';
import {Button} from 'react-bootstrap';
import Contactform from '../Form/Contactform';
const Details = () => {
    const [services,setServices] = ServicesUse();
    const {serviceID} = useParams();

    const newID= parseInt(serviceID)

    const Newservice = services.find(service => service.id === newID)
   
    return (
        <div className="container-fluid">
            {
                Newservice ?    <Row className="justify-content-evenly mt-4 h-100">
                    <Col lg={6} sm={12} md={6} className="text-center p-3">
                    <img className="rounded" width="300px" height="300px" src={Newservice.img} alt="" />
                    <div className="mt-3 ">
                    <h2 className="fw-bold" >{Newservice.name}</h2>
                    <h5>{Newservice.short}</h5>
                    <p>{Newservice.details}</p>
                    </div>
                    </Col>
                    <Col lg={6} sm={12} md={6}>
                        <h1 className="title text-center text-success">To Book This Service</h1>
                    <Contactform></Contactform>
                    </Col>
            </Row> :   <Spinner animation="border" variant="dark" />
 
            }
     </div>
    );
};

export default Details;