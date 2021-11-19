import React from 'react';
import { Form,Row, Col } from 'react-bootstrap';

const Ambulanceform = () => {
    const onblurHandler = e => {

    }
    const SubmitHanlder = e => {

    }
    return (
        <form onSubmit={SubmitHanlder}>
        <Row>
        <Form.Floating as={Col} className="mb-3 fw-bold text-primary ">
        <Form.Control
        className="w-100"
        id="floatingInputCustom"
        type="text"
        name="carname"
        onBlur={onblurHandler}
        required
        placeholder="Patient Name"
        />
        <label htmlFor="floatingInputCustom">Patient Name</label>
    </Form.Floating>

    <Form.Floating as={Col} className="mb-3 fw-bold text-primary ">
        <Form.Control
        className="w-100"
        id="floatingInputCustom"
        type="text"
        name="carname"
        onBlur={onblurHandler}
        required
        placeholder="Phone Number"
        />
        <label htmlFor="floatingInputCustom">Phone Number</label>
    </Form.Floating>
    </Row>
    <Form.Floating as={Col}  className="mb-3 fw-bold text-primary">
        <Form.Control className="w-100"
        id="floatingPasswordCustom"
        type="emal"
        name="email"
        onBlur={onblurHandler}
        placeholder="User Email"
        />
        <label htmlFor="floatingPasswordCustom">User Email</label>
    </Form.Floating>

    <Row>
    <Form.Floating  className="mb-3 fw-bold text-primary">
        <Form.Control className="w-100"
        id="floatingPasswordCustom"
        type="text"
        name="location"
        onBlur={onblurHandler}
        placeholder="Doctor Name"
        />
        <label htmlFor="floatingPasswordCustom">Location</label>
    </Form.Floating>

    <Form.Floating className="mb-3 fw-bold text-primary">
        <Form.Control as="textarea" className="w-100"
        id="floatingPasswordCustom"
        type="text"
        name="descrip"
        onBlur={onblurHandler}
        placeholder="Describe Your Dieases"
        />
        <label htmlFor="floatingPasswordCustom">Describe Your Dieases</label>
    </Form.Floating>
    </Row>
    <button type="submit" className="btn btn-info fw-bold rounded my-3 w-50" >Submit</button>
        </form>
    );
};

export default Ambulanceform;