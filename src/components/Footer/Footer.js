import React from 'react';
import {Col, NavLink, Row} from 'react-bootstrap';
import one from '../../asset/footer logi/one.jpg';
import two from '../../asset/footer logi/two.png';
import three from '../../asset/footer logi/three.jpg';
import './footer.css'
const Footer = () => {
    return (
        <div className="container-fluid   mt-3">
            <Row className="footers mt-4 p-3 justify-content-center">
                <Col lg={5} md={6} sm={12} >
                    <h1 className="fw-bold text-light">Lifebridge Medical Express</h1>
                    <p className="fw-bold"><small>We have  a 514-bed academic medical center located in Bangladesh historic South End, providing medical care for infants, children, teens and adults.</small></p>
                    <p><i className="fas fa-map-marker-alt"></i></p>
                    <p className="">Chittagong Bangladesh</p>
                    <div><h3 className="text-light">Follow Us</h3>
                    <p><i className="ms-3 fab fa-twitter  fa-2x"></i>
                       <i className="ms-3 fab fa-facebook-square  fa-2x"></i>
                       <i className="ms-3 fab fa-linkedin-in fa-2x"></i>
                    </p></div>
                </Col>
                <Col lg={2} md={6} sm={12}>
                    <NavLink className=" text-light">Accreditation Regulatory</NavLink>
                    <NavLink className=" text-light">Compliance</NavLink>
                    <NavLink className=" text-light">Donate</NavLink>
                    <NavLink className=" text-light">Awards</NavLink>
                    <NavLink className=" text-light">Careers</NavLink>
                </Col>
                <Col lg={2} md={6} sm={12}>
                    <NavLink className=" text-light">Find A Doctor</NavLink>
                    <NavLink className=" text-light">ICU Nurse Ratios</NavLink>
                    <NavLink className=" text-light">Institutional Master Plan</NavLink>
                    <NavLink className=" text-light">Insurance Plans Accepted</NavLink>
                </Col>
                <Col lg={2} md={6} sm={12}>
                    <NavLink className=" text-light">Patient Financial</NavLink>
                    <NavLink className=" text-light">Media Relations</NavLink>
                    <NavLink className=" text-light">Vendor Access</NavLink>
                </Col>
            </Row>
            <Row className="ms-4 justify-content-center">
                
                <Col lg={4} md={6} sm={12}><img className="w-25 rounded" src={three} alt="" /></Col>
                <Col lg={4} md={6} sm={12}><img className="w-25 rounded" src={one} alt="" /></Col>
                <Col lg={4} md={6} sm={12}><img className="w-25 rounded" src={two} alt="" /></Col>
             
            </Row>
        </div>
    );
};

export default Footer;