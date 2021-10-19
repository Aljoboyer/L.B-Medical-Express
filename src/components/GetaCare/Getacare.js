import React from 'react';
import {Col, Row,Button} from 'react-bootstrap';
import Contactform from '../Form/Contactform';
import abulance from '../../asset/image/abmulances.jpg';
import { useForm } from "react-hook-form";
import '../Form/Form.css'
import doctor from '../../asset/image/doctor.jpg'
const Getacare = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <div className="container-fluid">
            <Row className="p-4 mb-4 mt-2">
                <h1 className="title2 text-center">Virtual Care</h1>
                <h3 className="text-center text-info">We're making it easy for you
 to schedule an online doctor appointment to get the care you need when you need it</h3>
            <Col lg={6} md={6} sm={12} className="mt-4 mb-4">
                <h4 className="text-center"><i className="fas fa-video fa-2x">Video Visit</i></h4>
                <h5  className="text-info text-center mt-4">Estimated cost: varies by insurance</h5>
                <h5 className="text-center">What can be treated at a telemedicine video visit?</h5>
                <p className="text-center">We are expanding our virtual care offerings as part of our telehealth service. Now you can see your primary care provider or specialist for normal office visits. If you need care now, an on-call provider can treat a variety of issues, including:</p>
                <div className="d-flex justify-content-between flex-sm-wrap">
                <div>
                <li>Respiratory infection and allergies</li>
                <li>Skin and nail problems</li>
                <li>Stomach concerns</li>
                <li>Acid reflux</li>
                <li>Common female problems</li>
                </div>
               <div>
               <li>Birth control refill</li>
                <li>Minor headache</li>
                <li>Sprains and strains</li>
                <li>Low back pain</li>
                <li>Flu prevention / travel medication</li>
               </div>
                </div>
                <Button className="learn-more ms-4 mt-4">Find a Doctor</Button>
            </Col>
            <Col  lg={6} md={6} sm={12} className="text-center mt-4 mb-4">
                <h4 className="text-center fw-bold"><i className="fab fa-edge-legacy fa-2x"></i>eVisit</h4>
                <h5 className="text-info mt-4">Estimated cost: $40</h5>
                <h5>What can be treated at a virtual care eVisit?</h5>
                <li> Cold, flu and allergies</li>
                <li>Skin conditions</li>
                <li>Tobacco cessation</li>
                <li>Stomach/digestive issues</li>
                <li>Minor eye conditions</li>
                <li>Vaginal yeast infection</li>
                <li>Bladder infection (UTI)</li>
                <Button className="learn-more mt-4">Start visit Now</Button>
            </Col>
            </Row>
            <Row id="doctor" className="justify-content-center">
                <h1 className="text-light fw-bold fs-1 mt-4 mb-4 text-center">Make An Online Doctors Appointment</h1>
                <Col  className="mb-4"  lg={6} md={6} sm={12}>
                <Contactform>
                         <label htmlFor="">Doctor Name</label>
                        <input className="w-100" type="text" {...register("text", { required: true })} />

                        <label htmlFor="">Doctor Speciality</label>
                        <input className="w-100" type="text" {...register("location", { required: true })} />

                </Contactform>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <img className="h-75 w-100 mt-4 rounded" src={doctor} alt="" />
                </Col>
            </Row>
            <Row className="mt-4">
                <h1 className="title2 text-bold text-center mt-4 mb-4">Book Ambulance</h1>
                <p className="text-center mt-2"><b>Please provide the following information to book an ambulance. Ensure that your mobile number is correct. URAL will send SMS to your mobile to authenticate. Our support will reach you the soonest possible.</b></p>
                <Col lg={7} md={6} sm={12}>
                <Contactform>
                </Contactform>
                </Col>
                <Col className="mt-2" lg={5} md={6} sm={12}>
                    <img className="w-100 h-100 rounded" src={abulance} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Getacare;