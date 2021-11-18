import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Appointment from "./Appointment";
import Calender from "./Calender";

const Getappointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [appointments,setAppointments] = useState([])
    console.log(appointments)
    useEffect(() => {
        fetch('https://obscure-caverns-42480.herokuapp.com/docappointment')
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])
    return (
        <div className="container-fluid">
            <Header></Header>
            
            <Row className="justify-content-center">
                <Col className="justify-content-center" lg={3} md={4} sm={12}>
                    <h5 className="text-center fw-bold text-primary my-4">Select Your Appointment Date</h5>
                <Calender startDate={startDate} setStartDate={setStartDate}></Calender>
                </Col>
                <Col lg={9} md={4} sm={12}>
                <h2 className="text-center fw-bold text-primary my-4">Get A Doctors Appointment</h2>
                    <Row className="gap-3 justify-content-center">
                        {
                            appointments.map(appoint =>
                            <Appointment key={appoint._id} startDate={startDate} appoint={appoint} ></Appointment>)
                        }
                    </Row>
                </Col>
            </Row>
            
        </div>
    );
};

export default Getappointment;