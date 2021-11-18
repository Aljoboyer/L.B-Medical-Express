import React, { useState } from 'react';
import {Button, Form,Modal,Container,Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const Appointmentmodal = ({appointshow,onHide,appoint,startDate}) => {
    const [appointdata, setAppointmentdata] = useState({});
    const {name,time} = appoint;


    const OnBlurHanlder = e => {
      const fieldname = e.target.name;
      const fieldvalue = e.target.value;

      const newdata = {...appointdata}
      newdata[fieldname] = fieldvalue;
      setAppointmentdata(newdata)
    }
    const handleSubmit = e => {
      const appointInfo ={...appointdata, date:startDate.toLocaleDateString(), time:time, appoinmentName:name, status: 'Pending'}
      fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(appointInfo)
      })
      .then(res => res.json())
      .then(data => {
        if(data)
        {
          Swal.fire(
            'Booking Successfull',
            'We Will Inform You Later',
            'success'
          )
          e.target.reset()
        }
      })
        e.preventDefault()
    }
    return (
        <Modal onHide={onHide} show={appointshow} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Appointment Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Container>
          <Form noValidate  onSubmit={handleSubmit}>

        <Form.Group  md="4" controlId="validationCustom01">
          <Form.Label>Appointment Name</Form.Label>
          <Form.Control
          className="w-100"
            defaultValue={name}
            disabled
            type="text"
            placeholder="First name"
            name="appoinmentName"
            onBlur={OnBlurHanlder}
          />
        </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
           className="w-100"
            required
            type="email"
            placeholder="Please Enter Your User Email"
            name="email"
            onBlur={OnBlurHanlder}
          />
        </Form.Group>

        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control
           className="w-100"
            required
            type="text"
            placeholder="Patient Name"
            name="patientname"
            onBlur={OnBlurHanlder}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>Date</Form.Label>
          <Form.Control
           className="w-100"
           defaultValue={startDate.toLocaleDateString()}
           disabled
            type="text"
            placeholder="Date"
            name="date"
            onBlur={OnBlurHanlder}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Time</Form.Label>
          <Form.Control
           className="w-100"
           defaultValue={time}
           disabled
            type="text"
            placeholder="Time"
            name="time"
            onBlur={OnBlurHanlder}
          />
        </Form.Group>
      </Row>

      <Button onClick={onHide} type="submit">Submit form</Button>
    </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>

      </Modal>
    );
};

export default Appointmentmodal;