import React from 'react';
import {Row,Col} from 'react-bootstrap'
const Information = () => {
    return (
      <Row className="container-fluid text-center justify-content-center mb-4">
          <Col className="fise same p-2" lg={4} md={6} sm={12}>
          <i className="far fa-clock fa-2x"></i>
          <h3 className="fw-bold">Opening Hours</h3>
            <h5>Our Emergency Service is 24Hours Open</h5>
            <p className="fw-bold">Our Sequence Open at: 7:30AM</p>
          </Col>
          <Col className="mid text-light p-2" lg={4} md={6} sm={12}>
          <i className="fas fa-map-marker-alt fa-2x"></i>
          <h3 className="fw-bold">Visit Our Location</h3>
            <h5>Chittagong, Bangladesh</h5>
          </Col>
          <Col className="fise same p-2" lg={4} md={6} sm={12}>
          <i className="fas fa-phone-alt fa-2x"></i>
          <h3 className="fw-bold">Our Hotline</h3>
            <p className="fw-bold">+99665588</p>
          </Col>
      </Row>
    );
};

export default Information;