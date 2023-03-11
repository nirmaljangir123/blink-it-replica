import React from "react";
import { NavLink } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import '../newcomponent.css';
import { AiOutlineSearch, AiOutlineAudio, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
const NavbarLogo = () => {
    const navigate = useNavigate();
    return (
        <Navbar bg="" expand="" className="navbarbgcolor">
            <Container fluid>
                <div>
                    <Navbar.Brand href="#" className="logo d-lg-block d-none" onClick={() => navigate('/')}>blink<span className="it">it</span></Navbar.Brand>
                </div>
                <div className="locationwidth ">
                    <div  className="d-flex w-sm-100 w-lg-25">
                        <div>
                            <p className="delevery">Delivery in 12 minutes</p>
                            <select className="custom-select w-50" id="inputGroupSelect01">
                                <option selected>66, Mahadev Nagar, Nityanand Nagar, Vaishali Nagar, Jaipur, Rajasthan 302021, India</option>
                                <option value="1">dolat singh ka bass ,itawa-bhopji,chomu ,jaipur,rajasthan,india</option>
                            </select>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text d-xl-none d-block" id="basic-addon1"><h3><AiOutlineUser /></h3></span>
                        </div>
                    </div>
                </div>
                <div className="searchwidth">
                    <div className="input-group w-sm-100 w-lg-25">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><h5><AiOutlineSearch /></h5></span>
                        </div>
                       
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><h5><AiOutlineAudio /></h5></span>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-outline-primary d-xl-block d-none">Login</button>

                </div>
                <div className="cartwidth input-group-prepend " onClick={()=>navigate("/offcanvas-cart")}>
                    <span className="input-group-text bg-success" id="basic-addon1"><h2><AiOutlineShoppingCart /></h2> <div className="px-2 py-0 ">
                        <p>items</p>
                        <p>₹</p>
                    </div></span>
                </div>
            </Container>
        </Navbar >
    );
}

export default NavbarLogo;



// <Nav>
// <div>
//     <p className="delevery d-lg-block d-none">Delivery in 12 minutes</p>
// </div>
// </Nav>
// <Form className="d-flex w-50">
// <Form.Control
//     type="search"
//     placeholder="Search"
//     className="me-2"
//     aria-label="Search"
// />
//     <button type="button" className="btn btn-primary d-md-block d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">login
//     </button>
// </Form>
// <Nav>
// <NavLink to={"Showdata"}>
//     <div className="mycart d-flex rounded">
//         <button type="button" className="btn btn-success btn-lg"><img src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg" alt="No icon" width="40px" />My cart <h3>₹{ }</h3></button>
//     </div>
// </NavLink>
// </Nav>
