import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './Adminheader.css';
import { ListGroup } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
const Adminheader = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { path, url } = useRouteMatch();
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
  <Navbar.Toggle onClick={handleShow}  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  </Navbar.Collapse>
  </Container>
</Navbar>

      <Offcanvas className="w-50" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Addmin Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup>
        <ListGroup.Item className="dashlist" as={Link} to={`${url}`} variant="primary">Dashboard</ListGroup.Item>
        <ListGroup.Item className="dashlist" as={Link} to="/" variant="primary">Home</ListGroup.Item>
        <ListGroup.Item className="dashlist" as={Link} to={`${url}/manageservices`} variant="primary">Manage all Services</ListGroup.Item>
        <ListGroup.Item className="dashlist" as={Link} to={`${url}/patientservices`} variant="primary">Patient Order Service</ListGroup.Item>
        <ListGroup.Item className="dashlist" as={Link} to={`${url}/addservices`} variant="primary">Add new Services</ListGroup.Item>
        <ListGroup.Item className="dashlist" as={Link} to={`${url}/makeadmin`} variant="primary">Make an Admin</ListGroup.Item>
    </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
</>
    );
};

export default Adminheader;