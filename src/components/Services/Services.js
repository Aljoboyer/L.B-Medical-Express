import React from 'react';
import { Row } from 'react-bootstrap';
import ServicesUse from '../Hook/Hook';
import Service from './Service';

const Services = () => {
    const {services,setServices} = ServicesUse()
    return (
        <div  className="container-fluid mt-4">
            <div className="mt-4 reguler d-flex align-items-center justify-content-center text-light"><h1>Our Reguler Services</h1></div>
            <Row className="mt-4 services">
                {
                    services.map(service => <Service key={service.id} service={service} ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;