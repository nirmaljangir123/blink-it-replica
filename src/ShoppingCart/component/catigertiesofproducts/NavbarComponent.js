import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavbarComponent=()=>{
    const navigate = useNavigate();

    return(<>
            <Navbar bg="light" >
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto d-md-block d-none d-lg-flex "> 
                           <Nav.Link href="#home" onClick={()=>navigate('/Navclickdata')}>Vegetables & Fruits</Nav.Link> 
                            <Nav.Link href="#link" onClick={()=>navigate('/Navclickdata')}>Dairy & Breakfast</Nav.Link>
                            <Nav.Link href="#home">Munchies</Nav.Link>
                            <Nav.Link href="#link">Cold Drinks & Juices</Nav.Link>
                            <Nav.Link href="#home">Instant & Frozen Food</Nav.Link>
                            <Nav.Link href="#link">Tea, Coffee & Health Drinks</Nav.Link>
                            <Nav.Link href="#link">Bakery & Biscuits</Nav.Link>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Sweet Tooth</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Atta, Rice & Dal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Dry Fruits, Masala & Oil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Sauces & Spreads
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav> 

                    </Navbar.Collapse>
                </Container>
            </Navbar>

    </>)

}
export default NavbarComponent;