import React from 'react';
import { Col, Row } from 'react-bootstrap';
import dashome from '../../../asset/image/dashhome.jpg'
const Dashboardhome = () => {
    return (
        <Row>
            <h2 className="text-center fw-bold text-primary mt-4">Welcome Admin Dashboard</h2>
            <Row className="justify-content-center w-100">
                <Col lg={8} sm={12} md={12}>
                    <img src={dashome} alt="" />
                </Col>
            </Row>
        </Row>
    );
};

export default Dashboardhome;