import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Errorimg from '../../asset/image/404-erross.jpg';
const Notfound = () => {
    return (
        <div className="container-fluid notfound">
            <Row className="w-100 justify-content-center">
                <Col lg={10} md={12} sm={12}>
                    <img className="w-100" src={Errorimg} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Notfound;