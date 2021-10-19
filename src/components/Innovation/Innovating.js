import React from 'react';
import {Col, Row} from 'react-bootstrap';
import imgone from '../../asset/image/invt1.jpg';
import imgtwo from '../../asset/image/invt2.jpg';
import imgthree from '../../asset/image/invt3.jpg';
import imgfour from '../../asset/image/invt4.jpg';
import './invt.css';

const Innovating = () => {
    return (
        <div className="container-fluid invt-contain">
            <h2 className="text-light fs-1 fw-bold text-center pt-4 mt-4 mb-4">We're Innovating Patient Care</h2>
            <Row className=" mt-4 mb-4 p-3">
                <Col className="colam" lg={6} md={6} sm={12}>
                    <img src={imgone} alt="" />
                    <h1 className="text-light fs-1">Research <i className="fas fa-chevron-right"></i></h1>
                    <p className="text-light">Cedars-Sinai is consistently recognized as a leader in medical research, with studies and clinical trials that result in cutting-edge treatments that improve the lives of patients around the world.</p>
                </Col>
                <Col className="colam" lg={6} md={6} sm={12}>
                <img src={imgtwo} alt="" />
                <h1 className="text-light fs-1">Education <i className="fas fa-chevron-right"></i></h1>
                <p className="text-light">From routine care to the most complex procedures, we are advancing the frontiers of medicine and innovation while training the next generation of medical professionals.</p>
                </Col>
                <Col className="colam" lg={6} md={6} sm={12}>
                <img src={imgthree} alt="" />
                <h1 className="text-light fs-1">Community <i className="fas fa-chevron-right"></i></h1>
                <p className="text-light">Cedars-Sinai works closely with our community partners to reduce disparities in healthcare, improve access and increase vital resources for those in need. </p>
                </Col>
                <Col className="colam" lg={6} md={6} sm={12}>
                <img src={imgfour} alt="" />
                <h1 className="text-light fs-1">Medical Professionals <i className="fas fa-chevron-right"></i></h1>
                <p className="text-light">Resources and tools for medical professionals and referring physicians. Check out our calendar of events or get information on becoming an affiliate or joining our medical staff.</p>
                </Col>
            </Row>
        </div>
    );
};

export default Innovating;