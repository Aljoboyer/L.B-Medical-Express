import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Navbaar = () => {
    const {Logout,setUser,user,isadmin} = useAuth();

    const LogoutHandler = () => {
        Logout()
    }
 
    return (
        <Navbar  collapseOnSelect expand="lg" className="navs">
        <Container className="pt-3 pb-4">
            <Navbar.Brand href="" className="brands text-light me-4">L.B. Medical Express <i className="fas fa-book-medical"></i></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
            <Navbar.Collapse id="responsive-navbar-navy">
                <Nav className="me-auto">
                <Nav.Link className="fs-6 fw-bold navss text-light" as={Link} to="/" >Home</Nav.Link>
                <Nav.Link className="fs-6 fw-bold navss " as={Link} to="/visitors">Patients And Vistors</Nav.Link>
                <Nav.Link className="fs-6 fw-bold navss " as={Link} to="/getacare">Get a Care</Nav.Link>
                {
                   user.email ? <> { isadmin ? <Nav.Link className="fs-6 fw-bold navss " as={Link} to="/admindashboard">Dashboard</Nav.Link> : ''}</> : ''
                }
                {
                    user.email ? <>{isadmin ? '' : <NavDropdown className="fs-6 fw-bold navss text-light" title="Your Activities" id="collasible-nav-dropdown">
                    <NavDropdown.Item  className="navdrop"  as={Link} to="/yourservices">MY Service</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  className="navdrop"  as={Link} to="/myappoinment">MY Appointment</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="navdrop">Payment History</NavDropdown.Item>
                   
                  </NavDropdown>}</> : ''
                }
                </Nav>
                
                <Nav>
                    {
                        user.email ? <Nav> <p className="text-center mt-2 fw-bold me-2">{user.displayName}</p>  <Nav.Link onClick={LogoutHandler} className="text-light fs-5 login me-2" >Log out</Nav.Link></Nav>
                        : <Nav.Link className="text-center text-light fs-5 login me-2" as={Link} to="/login">Log in</Nav.Link>

                    }
                </Nav>
            </Navbar.Collapse>
    </Container>
</Navbar>
    );
};

export default Navbaar;