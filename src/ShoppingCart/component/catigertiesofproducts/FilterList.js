import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function FilterList() {
    return (
        <Navbar bg="success rounded">
                <Container>
                    <div>
                        <Navbar.Brand href="#home">Buy Hookah Needs Online</Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Shot By</Nav.Link>
                                <div className='border rounded '>
                                    <NavDropdown title="Name( A to Z )" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.4"> Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </div>

                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
        </Navbar >
    );
}

export default FilterList;