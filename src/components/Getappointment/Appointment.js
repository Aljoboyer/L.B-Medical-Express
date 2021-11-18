import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './Appointment.css'
import Appointmentmodal from './Appointmentmodal/Appointmentmodal.';
const Appointment = ({appoint,startDate}) => {
    const {doctorname,name,price,space,time} = appoint;
    const [appointshow, setAppointshow] = useState(false);
    return (
        <Col className="appointment text-center rounded p-2" lg={3} md={6} sm={12}>
            <h5>{name}</h5>
            <h6><b>{doctorname}</b></h6>
            <h6>$ {price}</h6>
            <p><b>Available Space {space}</b></p>
            <p>{time}</p>
            <button onClick={() => setAppointshow(true)} className="btn btn-primary">Book Now</button>

            <Appointmentmodal startDate={startDate} appoint={appoint} appointshow={appointshow} onHide={() => setAppointshow(false)} />
        </Col>
    );
};

export default Appointment;