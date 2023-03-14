import React from "react";
import { NavLink } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import '../newcomponent.css';
import { AiOutlineSearch, AiOutlineAudio, AiOutlineUser, AiOutlineShoppingCart, AiFillPhone } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
// offcanvas bar
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffcanvasCart from "../offcanvas/Offcanvas";
import { Location } from "../locatiob/Location";
import { Login } from "../login/Login";
import { Otp } from "../login/Otp";


 

const NavbarLogo = ({ name, ...props }) => { 

    const navigate = useNavigate();
    // offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data,setdata]=useState(true);
    const [input,setinput]=useState(true);
    console.log(input)

    return (
            <div className="container-fluid ">
                <div className="row py-3 border justify-content-between">
                 <div className="col-lg-2">
                    <Navbar.Brand href="#" className="logo d-lg-block d-none" onClick={() => navigate('/')}>blink<span className="it">it</span></Navbar.Brand>
                </div>
                
                    <div className="locationwidth col-lg-3 col-sm-11 d-flex  ">
                    <div>
                        <Location/>
                    </div>
                      
                        <div className="input-group-prepend">
                            <span className="input-group-text d-xl-none d-block" id="basic-addon1"><h3><AiOutlineUser /></h3></span>
                        </div>
                    </div>
                
                <div className="searchwidth col-sm-10 col-lg-4 align-self-center">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><h5><AiOutlineSearch /></h5></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search items" aria-label="Username" aria-describedby="basic-addon1" onClick={() => navigate('/search-click-data')}/>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><h5><AiOutlineAudio onClick={() => navigate('/micro-phone')}/></h5></span>
                        </div>
                    </div>
                </div>
                <div className=" col-1 align-self-center">
                    <button type="button" className="btn btn-outline-primary d-xl-block d-none" variant="primary" onClick={handleShow}>Login</button>
                </div>
                
                <div className="cartwidth col-lg-2 col-sm-11 p-2" >
                    <span className="input-group-text bg-success" id="basic-addon1"><h1 onClick={Login} className="text-light"><AiOutlineShoppingCart /></h1> 
                    <div className="px-2 d-block align-self-center text-light">
                        <h5>My Cart</h5>
                        <h5>₹</h5>
                    </div></span>   
                </div>
            </div>
                             
            <Modal show={show} onHide={handleClose}>
              { 
                input ?(<Login/>):(<Otp />)
              }
             </Modal>

            </div>

    );
}

export default NavbarLogo;


