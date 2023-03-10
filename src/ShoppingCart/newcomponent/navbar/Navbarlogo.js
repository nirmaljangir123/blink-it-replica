import React from "react";
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
const NavbarLogo = () => {
    const navigate = useNavigate();
    return (
        <Navbar bg="" expand="lg" className="px-5 py-2">
            <Container fluid>
                    <Navbar.Brand href="#" className="logo" onClick={()=>navigate('/')}>blink<span className="it">it</span></Navbar.Brand>
                <Nav>
                    <div>
                        <p className="delevery d-lg-block d-none">Delivery in 12 minutes</p>
                    </div>
                </Nav>
                <Form className="d-flex w-50">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                        <button type="button" className="btn btn-primary d-md-block d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">login
                        </button>
                </Form>
                <Nav>
                    <NavLink to={"Showdata"}>
                        <div className="mycart d-flex rounded">
                            <button type="button" className="btn btn-success btn-lg"><img src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg" alt="No icon" width="40px" />My cart <h3>₹{ }</h3></button>
                        </div>
                    </NavLink>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default NavbarLogo;
