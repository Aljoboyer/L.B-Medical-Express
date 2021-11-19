import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Services from '../Services/Services';
import './home.css';
import Homeslide from './Homeslide';
import {Button} from 'react-bootstrap'
import WhyYouchoose from '../WhyyouChoose/WhyYouchoose';
import Innovating from '../Innovation/Innovating';
import Header from '../Header/Header'
import Locationmap from '../Locationmap/Locationmap';
import { Link } from 'react-router-dom';
import Ourblog from './Ourblogslide/Ourblog.';
import Information from './Information/Information';

const Home = () => {
    return (
        <div className="container-fluid home-cont">
            <Header></Header>
            <Row className="align-items-center justify-content-center">
                <Col lg={5} md={4} sm={12} className="align-items-center">
                    <h1 className="homeh">We are here for you</h1>
                    <p id="homep">With enhanced safety measures in place, we are here to provide the care and services you need.</p>
                  <Link to="/getappointment"><Button className="learn-more mb-4">Get an Appointment</Button></Link>
                </Col>
                <Col lg={7} mg={7} sm={12}>
                    <Homeslide></Homeslide>
                </Col>
            </Row>
            <Information></Information>
            <Services></Services>
            <Innovating></Innovating>
            <WhyYouchoose></WhyYouchoose>
            <Locationmap></Locationmap>
            <Ourblog></Ourblog>
        </div>
    );
};

export default Home;