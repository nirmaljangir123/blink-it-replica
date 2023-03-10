import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";
// import Login from "./Login";
import './navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

const NavbarMain = () => {

    const counter = useSelector((state) => state.counter);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    // console.log("===========>", counter);
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
                        <button type="button" className="btn btn-primary d-md-block d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}>login
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
                

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title><h4>Phone Number Verification </h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">

                        <p className="fs-5  text-center ">Enter your phone number to <br /> Login/Sign up</p>
                        <input className="w-75 p-2 mb-3 rounded shadow border" placeholder=" 📱 + 91-" type="tel" /><br />
                        <button className="btn btn-primary w-25 mb-2">Send OTP</button>
                        <p>By continuing, you agree to our</p>
                        <a className="text-success px-1" href="#">Terms of service</a>
                        <a className="text-success px-1" href="#">Privacy policy</a>
                    </div>
                </Modal.Body>
            </Modal>
        </Navbar>
    );
}

export default NavbarMain;

// const Navbar = () => {
//     return (
//         <div className="main container-fluid ">
//             <div className="pt-3 pb-2 ">
//                 <div className="row">
//                     <div className="d-md-block d-none col-md-3">
//                         <p className="logo">blink<span className="it">it</span></p>
//                     </div>
//                     <div className="col-md-9 d-md-flex  justify-content-between">
//                         <div className="d-flex justify-content-between">
//                             <div>
//                                 <p className="delevery">Delivery in 12 minutes</p>
//                                 <p className="delevery1">78 mahaveer nager</p>
//                             </div>
//                             <div>
//                                 <button type="button" className="btn btn-primary d-md-none d-block " data-bs-toggle="modal" data-bs-target="#exampleModal">
//                                     login
//                                 </button>
//                             </div>
//                         </div>
//                         <div>
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                         </div>


//                         <NavLink to={"login"}>
//                             <div >
//                                 <button type="button" className="btn btn-primary d-md-block d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                                     login
//                                 </button>
//                             </div>
//                         </NavLink>
//                         <div className="mycart d-flex">
//                             <button type="button" className="btn btn-success d-md-block d-none" ><img src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg" alt="No icon" width="40px" />My cart <h3>₹</h3></button>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div>

//     )
// }
// export default Navbar;