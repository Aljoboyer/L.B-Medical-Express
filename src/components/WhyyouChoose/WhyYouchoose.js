import React from 'react';
import {Col, Row} from 'react-bootstrap'
const WhyYouchoose = () => {
    return (
        <div className="container-fluid" >
            <h1 className="title2 pt-4 mt-4 mb-4 text-center">Why Choose LifeBridge Medical?</h1>
            <Row className="mt-4 p-3 text-center">
                <Col className="mt-4 p-2 " lg={3} md={6} sm={12}>
                    <h1><i className="fas fa-stethoscope fa-4x"></i></h1>
                    <h3 className="text-bold mt-3">More experience</h3>
                    <p className="text-bold">Every year, more than a million people come to Mayo Clinic for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions.</p>
                </Col>
                <Col className="mt-4 p-2" lg={3} md={6} sm={12}>
                    <h1><i className="fas fa-clipboard-check fa-4x"></i></h1>
                    <h3 className="text-bold">The right answers</h3>
                    <p className="text-bold">Successful treatment starts with an accurate diagnosis, and our experts take the time to get it right. A team of specialists will listen to your needs and evaluate your condition from every angle to make the very best plan for you.</p>
                </Col>
                <Col className="mt-4 p-2" lg={3} md={6} sm={12}>
                    <h1><i className="fas fa-hand-holding-medical fa-4x"></i></h1>
                <h3 className="text-bold">Seamless care</h3>
                    <p className="text-bold">At Mayo Clinic, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.</p>
                </Col>
                <Col className="mt-4 p-2" lg={3} md={6} sm={12}>
                    <h1><i className="fas fa-mars-double fa-4x"></i></h1>
                <h3 className="text-bold">Unparalleled expertise</h3>
                    <p className="text-bold">Mayo Clinic experts are some of the best in the world. In the U.S. News & World Report rankings of top hospitals, Mayo Clinic is consistently ranked among the top hospitals in the nation.</p>
                </Col>
            </Row>
        </div>
    );
};

export default WhyYouchoose;