import React from 'react';
import { Col ,Button, Row} from 'react-bootstrap';

const Manageservice = ({service,ServiceDeleteHandler}) => {
    return (
     <Col lg={6} md={6} sm={12}>
        <Row>
            <Col lg={6} md={6} sm={12}>
            <img className="w-100 h-75" src={`data:image/jpeg;base64,${service.img}`} alt="" />
            </Col>
            <Col lg={6} md={6} sm={12}>
            <h4>{service.name}</h4>
         <p>{service.short}</p>
         <Button onClick={() => ServiceDeleteHandler(service._id,true)} className="btn btn-primary text-light mx-2 my-2">Delete Service</Button>
         <Button className="btn btn-dark text-light fw-bold my-2">Edit Service</Button>
            </Col>
        </Row>
     </Col>
    );
};

export default Manageservice;