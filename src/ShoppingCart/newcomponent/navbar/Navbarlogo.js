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
import Swal from "sweetalert2";


const NavbarLogo = ({ name, ...props }) => { 

    const navigate = useNavigate();
    // offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data,setdata]=useState(true);
    const [input,setinput]=useState(true);

    const NextData=()=>{
      setinput(false);
      console.log("fuction set input",input)
    }
    console.log("outer set input",input)
    
    const SubmitData=()=>{
        setinput(true);
    }
    console.log("handleclosed",handleClose)
    
    const BackOnClick=()=>{
       setinput(true)
    }

    // Swal
    const showAlert = () => {
        Swal.fire({
            title: "Success",
            text: "Login successful",
            icon: "success",
            confirmButtonText: "OK",
        });

        // show number
    }
    return (
            <div className="container-fluid ">
                <div className="row py-3 border justify-content-around">
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
                
                
                <div className="cartwidth col-lg-2 col-sm-11 p-2 " >
                    <span className="cartwidth1 input-group-text" id="basic-addon1"><h1 className="text-light"><AiOutlineShoppingCart /></h1> 
                    <div className="px-2 d-block align-self-center text-light">
                        <h5>My Cart</h5>
                        {/* <h5>₹</h5> */}
                       
                    </div></span>   
                </div>
            </div>
        
                             
            <Modal show={show} onHide={handleClose}>
              { 
                input ?(<Login NextData={NextData}  handleClose={handleClose}/>):(<Otp SubmitData={SubmitData} handleClose={handleClose} showAlert={showAlert} BackOnClick={BackOnClick} />)
              }
             </Modal>

            </div>

    );
}

export default NavbarLogo;






// import React from "react";
// import { NavLink } from "react-router-dom";
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from "react-router-dom";
// import '../newcomponent.css';
// import { AiOutlineSearch, AiOutlineAudio, AiOutlineUser, AiOutlineShoppingCart, AiFillPhone } from "react-icons/ai";
// import Modal from 'react-bootstrap/Modal';
// // offcanvas bar
// import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import OffcanvasCart from "../offcanvas/Offcanvas";
// import { Location } from "../locatiob/Location";
// import { Login } from "../login/Login";
// import { Otp } from "../login/Otp";


 

// const NavbarLogo = ({ name, ...props }) => { 

//   function Logins(item) {

//     // next button
//     const [data, setdata] = useState(false);
  
//     const inputdata = (e) => {
//         let num = e.target.value;
  
//         const data = num;
//         const newData = data;
//         // console.log("------", newData);
//         if (data.length === 10) {
//             setdata(true);
//         }
//         else if (data.length > 10) {
//             alert("please enter only 10 digit number")
//         }
//         else {
//             setdata(false);
//         }
//     }
//     return (
//         <>
//             <div className='text-center fs-3'>Phone Number Verification</div>
//             <hr />
//             <div className='w-100 p-5 text-center'>
//                 <p className="fs-4">Enter your phone number toLogin/Sign up</p>
//                 <div className="input-group mb-3 d-block">
//                     <div className='d-flex py-3'>
//                         <div className="input-group-prepend">
//                             <span className="input-group-text" id="basic-addon1"><h5><AiFillPhone /></h5> 91+ </span>
//                         </div>
//                         <input type="text" className="form-control" placeholder="Enter phone number" aria-label="Username" aria-describedby="basic-addon1" onChange={inputdata} />
//                     </div>
//                     <div>{
//                         data ? <button type="button" className="btn btn-success btn-lg w-100" onClick={Log}>Next</button> :
//                             <button type="button" className="btn btn-danger btn-lg w-100">Next</button>
//                     }
//                     </div>
//                 </div>
//                 <p>By continuing, you agree to our <a href="https://blinkit.com/terms"> <span>Terms of service</span></a><br /><a href="https://blinkit.com/privacy"><span>Privacy policy</span></a></p>
//             </div>
  
//         </>
//     );
//   }


//   function Otps() {
//     return (
//         <>
//         <div className="p-5">
//         <div className='text-center fs-4'>Phone Number Verification</div>
//         <hr />
//                     <p className='text-center fs-5'>Enter 4 digit code sent to your phone </p>
//                     <div className="input-group p-3 ">
//                         <div className='d-flex'>
//                             <input type="tel" className='w-25 m-2 p-2 rounded' />
//                             <input type="tel" className='w-25 m-2 p-2 rounded' />
//                             <input type="tel" className='w-25 m-2 p-2 rounded' />
//                             <input type="tel" className='w-25 m-2 p-2 rounded' />
//                         </div>
//                     </div>
//                     <div className="text-center">
//                         <button type="button" className="btn btn-success btn-lg w-50 ">Next</button> :
//                     </div>
//                     <div className="text-center pt-3">
//                             <h5 className='text-danger'>Resend Code</h5>
//                     </div>
//                    </div>
//         </>
//     );
//   }


//   const[input,setinput]=useState(true);
//   console.log(input);
//   function Log(){
//     setinput(false)
//     console.log(setinput)
//   }
  
//     const navigate = useNavigate();
//     // offcanvas
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [data,setdata]=useState(true);
//     console.log(data)
//     return (
//             <div className="container-fluid ">
//                 <div className="row py-3 border justify-content-between">
//                  <div className="col-lg-2">
//                     <Navbar.Brand href="#" className="logo d-lg-block d-none" onClick={() => navigate('/')}>blink<span className="it">it</span></Navbar.Brand>
//                 </div>
                
//                     <div className="locationwidth col-lg-3 col-sm-11 d-flex  ">
//                     <div>
//                         <Location/>
//                     </div>
//                         {/* <div>
//                             <p className="delevery">Delivery in 12 minutes</p>
//                             <select className="custom-select w-75" id="inputGroupSelect01">
//                                 <option selected>66, Mahadev Nagar, Nityanand Nagar, Vaishali Nagar, Jaipur, Rajasthan 302021, India</option>
//                                 <option value="1">dolat singh ka bass ,itawa-bhopji,chomu ,jaipur,rajasthan,india</option>
//                             </select>
//                         </div> */}
//                         <div className="input-group-prepend">
//                             <span className="input-group-text d-xl-none d-block" id="basic-addon1"><h3><AiOutlineUser /></h3></span>
//                         </div>
//                     </div>
                
//                 <div className="searchwidth col-sm-10 col-lg-4 align-self-center">
//                     <div className="input-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text" id="basic-addon1"><h5><AiOutlineSearch /></h5></span>
//                         </div>
//                         <input type="text" className="form-control" placeholder="Search items" aria-label="Username" aria-describedby="basic-addon1" onClick={() => navigate('/search-click-data')}/>
//                         <div className="input-group-prepend">
//                             <span className="input-group-text" id="basic-addon1"><h5><AiOutlineAudio onClick={() => navigate('/micro-phone')}/></h5></span>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div className=" col-1 align-self-center"> */}
//                 <div className=" col-1 align-self-center">
//                     <button type="button" className="btn btn-outline-primary d-xl-block d-none" variant="primary" onClick={handleShow}>Login</button>
//                 </div>
                
//                 <div className="cartwidth col-lg-2 col-sm-11 p-2" >
//                     <span className="input-group-text bg-success" id="basic-addon1"><h1 onClick={handleShow} className="text-light"><AiOutlineShoppingCart /></h1> 
//                     <div className="px-2 d-block align-self-center text-light">
//                         <h5>My Cart</h5>
//                         <h5>₹</h5>
//                     </div></span>   
//                 </div>
//             </div>
//                 {/* <Offcanvas show={show} onHide={handleClose}>
//                     <OffcanvasCart />
//                 </Offcanvas> */}
                
//             <Modal show={show} onHide={handleClose}>
//               { 
//                 input ?(<Logins/>):(<Otps/>)
//               }
//              </Modal>

//             </div>

//     );
// }

// export default NavbarLogo;





// import React from "react";
// import { NavLink } from "react-router-dom";
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from "react-router-dom";
// import '../newcomponent.css';
// import { AiOutlineSearch, AiOutlineAudio, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
// import Modal from 'react-bootstrap/Modal';

// // offcanvas bar
// import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import OffcanvasCart from "../offcanvas/Offcanvas";
// import { Location } from "../locatiob/Location";
// import { Login } from "../login/Login";

// const NavbarLogo = ({ name, ...props }) => {
//     const navigate = useNavigate();
//     // offcanvas
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="col-lg-2">
//                   <Navbar.Brand href="#" className="logo d-lg-block d-none" onClick={() => navigate('/')}>blink<span className="it">it</span></Navbar.Brand>
//                  </div>      
//                  <div className="locationwidth col-lg-3 col-sm-11 d-flex">
//                      <div>
//                          <Location/>
//                      </div>
//                         <div className="input-group-prepend">
//                             <span className="input-group-text d-xl-none d-block" id="basic-addon1"><h3><AiOutlineUser /></h3></span>
//                         </div>
//                     </div>

//                     <div className="searchwidth col-sm-10 col-lg-4 align-self-center">
//                      <div className="input-group">
//                          <div className="input-group-prepend">
//                              <span className="input-group-text" id="basic-addon1"><h5><AiOutlineSearch /></h5></span>
//                          </div>
//                          <input type="text" className="form-control" placeholder="Search items" aria-label="Username" aria-describedby="basic-addon1" onClick={() => navigate('/search-click-data')}/>
//                          <div className="input-group-prepend">
//                              <span className="input-group-text" id="basic-addon1"><h5><AiOutlineAudio onClick={() => navigate('/micro-phone')}/></h5></span>
//                          </div>
//                      </div>
//                  </div>
//                  {/* <div className=" col-1 align-self-center"> */}
//                  <div className=" col-1 align-self-center">
//                      <button type="button" className="bt n btn-outline-primary d-xl-block d-none"  variant="primary" onClick={handleShow}>Login</button>
//                  </div>
                
//                  <div className="cartwidth col-lg-2 col-sm-11 p-2" >
//                      <span className="input-group-text bg-success" id="basic-addon1"><h1 onClick={handleShow} className="text-light"><AiOutlineShoppingCart /></h1> 
//                      <div className="px-2 d-block align-self-center text-light">
//                          <h5>My Cart</h5>
//                          <h5>₹</h5>
//                      </div></span>   
//                  </div>
//                  <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       </nav>

//     );
// }

// export default NavbarLogo;









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


// import React from "react";
// import { NavLink } from "react-router-dom";
// import InputGroup from 'react-bootstrap/InputGroup';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from "react-router-dom";
// import '../newcomponent.css';
// import { AiOutlineSearch, AiOutlineAudio, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

// // offcanvas bar
// import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import OffcanvasCart from "../offcanvas/Offcanvas";

// const NavbarLogo = ({ name, ...props }) => {
//     const navigate = useNavigate();
//     // offcanvas
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <Navbar bg="" expand="" className="navbarbgcolor">
//             <Container fluid>
//                 <div>
//                     <Navbar.Brand href="#" className="logo d-lg-block d-none" onClick={() => navigate('/')}>blink<span className="it">it</span></Navbar.Brand>
//                 </div>
                
//                     <div className="locationwidth col-2 d-flex w-sm-100 w-lg-25 bg-warning ">
//                         <div>
//                             <p className="delevery">Delivery in 12 minutes</p>
//                             <select className="custom-select w-50" id="inputGroupSelect01">
//                                 <option selected>66, Mahadev Nagar, Nityanand Nagar, Vaishali Nagar, Jaipur, Rajasthan 302021, India</option>
//                                 <option value="1">dolat singh ka bass ,itawa-bhopji,chomu ,jaipur,rajasthan,india</option>
//                             </select>
//                         </div>
//                         <div className="input-group-prepend">
//                             <span className="input-group-text d-xl-none d-block" id="basic-addon1"><h3><AiOutlineUser /></h3></span>
//                         </div>
//                     </div>
                
//                 <div className="searchwidth col-4">
//                     <div className="input-group w-sm-100 w-lg-25">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text" id="basic-addon1"><h5><AiOutlineSearch /></h5></span>
//                         </div>

//                         <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
//                         <div className="input-group-prepend">
//                             <span className="input-group-text" id="basic-addon1"><h5><AiOutlineAudio /></h5></span>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <button type="button" class="btn btn-outline-primary d-xl-block d-none">Login</button>
//                 </div>
//                 <div className="cartwidth input-group-prepend" >
//                     <span className="input-group-text bg-success" id="basic-addon1"><h1 onClick={handleShow} className="text-light"><AiOutlineShoppingCart /></h1> 
//                     <div className="px-2 d-flex align-self-center text-light">
//                         <h5>My Cart</h5>
//                         <h5>₹</h5>
//                     </div></span>
//                 </div>
//                 <Offcanvas show={show} onHide={handleClose}>
//                     <OffcanvasCart />
//                 </Offcanvas>

//             </Container>

//         </Navbar >
//     );
// }

// export default NavbarLogo;



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