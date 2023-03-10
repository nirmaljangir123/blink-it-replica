import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { snacksMunchies } from '../mockUp/SnacksMunchies';
function Snaks() {
    return (<>
        <div className='container-fluid mt-2 w-100'>
        <h1>Snacks & Munchies</h1>
        <div className='row col-12 justify-content-around'>
            {snacksMunchies.map((product) => (
                <Card border="success" style={{ width: '15rem' }} className="m-2">
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <div className='d-flex justify-content-between'>
                        <Card.Text>₹{product.price}</Card.Text>
                        <Card.Text>{product.weight}</Card.Text>
                        </div>
                        <Button variant="primary">Add</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
        </div>
    </>);
}

export default Snaks;