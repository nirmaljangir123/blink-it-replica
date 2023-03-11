import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function FilterList() {
    return (
        <Navbar bg="" expand="md" className='sortcolor border rounded'>
            <Container className=' justify-content-between'>
                <div>
                    <Navbar.Brand href="#home">Buy Hookah Needs Online</Navbar.Brand>
                </div>
                <div className='d-flex p-2 w-25'>
                    <div className='align-self-center d-md-block d-none'>
                        <h5 >Sort by :</h5>
                    </div>
                    <div className=' '>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='w-50 warning'>
                            <Nav className="border">
                                <NavDropdown title="Relevance" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action1">Relevance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action1">Price (Low to high)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action2">Price (high to Low)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action3"> Discount (High to low)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Both all </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </Navbar.Collapse>
                    </div>

                </div>
            </Container>
        </Navbar>
    );
}

export default FilterList;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';

// function FilterList() {
//     return (
//         <div className='d-flex justify-content-between border  bg-success rounded p-2'>
//             <div clas>
//                 <h5>Buy Hookah Needs Online</h5>
//             </div>
//             <div>
//                 <div className="input-group">
//                     <div className="p-2">
//                         <h5>Sort</h5> 

//                     </div>
//                     <select className="custom-select rounded">

//                         <option selected className='bg-warning'>Relevance</option>
//                         <option value="1">Price (Low to high)</option>
//                         <option value="2">Price (high to Low)</option>
//                         <option value="3"> Discount (High to low)</option>
//                         <option value="4">Both all</option>



//                     </select>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default FilterList;



{/* 
<Nav.Link href="#home">Shot By</Nav.Link>
                        <div className='border rounded '>
                            <NavDropdown title="Relevance( A to Z )">
                                <div className='p-1'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" for="exampleRadios2">
                                            Relevance
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" for="exampleRadios2">
                                            Price (Low to high)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" for="exampleRadios2">
                                            Price (high to Low)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" for="exampleRadios2">
                                            Discount (High to low)
                                        </label>
                                    </div>
                                </div>
                            </NavDropdown>
                        </div>

                    </Nav> */}