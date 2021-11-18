import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
const Dashboardlists = () => {
    const { path, url } = useRouteMatch();
    return (
        <ListGroup>
        <ListGroup.Item className="mt-2 fw-bold" as={Link} to={`${url}`} variant="primary">Dashboard</ListGroup.Item>
        <ListGroup.Item className="mt-2 fw-bold" as={Link} to="/" variant="primary">Home</ListGroup.Item>
        <ListGroup.Item className="mt-2 fw-bold" as={Link} to={`${url}/patientappointments`} variant="primary">Patient Appointment</ListGroup.Item>
        <ListGroup.Item className="mt-2 fw-bold" as={Link} to={`${url}/manageservices`} variant="primary">Manage all Services</ListGroup.Item>
        <ListGroup.Item className="mt-2 fw-bold" as={Link} to={`${url}/patientservices`} variant="primary">Patient Requested Service</ListGroup.Item>
        <ListGroup.Item className="mt-2 fw-bold" as={Link} to={`${url}/addservices`} variant="primary">Add new Services</ListGroup.Item>
        <ListGroup.Item className="mt-2 fw-bold" as={Link} to={`${url}/makeadmin`} variant="primary">Make an Admin</ListGroup.Item>
    </ListGroup>
    );
};

export default Dashboardlists;