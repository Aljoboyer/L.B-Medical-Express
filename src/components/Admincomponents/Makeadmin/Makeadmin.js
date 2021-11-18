import React, { useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Successmodal from '../../Commonpages/Successmodal/Successmodal';

const Makeadmin = () => {
    const [admin, setAdmin] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const onBlurHandler = e => {
        setAdmin(e.target.value)
    }
    const SubmitHandler = e => {
        fetch(`http://localhost:5000/user?email=${admin}`, {
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            e.target.reset()
            setShow(true)
        })
        
        e.preventDefault()
    }
    return (
       <Row className="justify-content-center">
           <h2 className="text-center fw-bold">Make A New Admin</h2>

           <Col lg={8} md={10} sm={12}>
           <form onSubmit={SubmitHandler}>
           <FloatingLabel className="my-3"  controlId="floatingPassword" label="Enter Email Whom You Want To Make Admin">
        <Form.Control name="email"
            onBlur={onBlurHandler} type="text" placeholder="Enter Email Whom You Want To Make Admin" />
        </FloatingLabel>
        <button className="btn btn-info fw-bold">Add Admin</button>
           </form>
           </Col>

    <Successmodal handleClose={handleClose} show={show}>Admin Added</Successmodal>

       </Row>
    );
};

export default Makeadmin;