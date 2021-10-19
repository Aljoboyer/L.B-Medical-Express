import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Navbaar = () => {
    const {Logout,setUser,user} = useAuth();

    const LogoutHandler = () => {
        Logout()
    }
 
    return (
        <Navbar sticky="top"  collapseOnSelect expand="lg" className="navs">
        <Container className="pt-3 pb-4">
            <Navbar.Brand href="" className="brands text-light me-4">L.B. Medical Express <i className="fas fa-book-medical"></i></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
            <Navbar.Collapse id="responsive-navbar-navy">
                <Nav className="me-auto">
                <Nav.Link className="fs-5 navss text-light" as={Link} to="/" >Home</Nav.Link>
                <Nav.Link className="fs-5 navss text-light" as={Link} to="/visitors">Patients And Vistors</Nav.Link>
                <Nav.Link className="fs-5 navss text-light" as={Link} to="/getacare">Get a Care</Nav.Link>
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