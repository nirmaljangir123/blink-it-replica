import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cards({product}) {
    return (<>
                <div >
                        <Card border="success" style={{ width: '16rem' }} className="carthover m-1">
                        <div className='w-100'>
                            <Card.Img variant="top" src={product.image}  className="w-75 "/>
                        </div>
                            <Card.Body >
                                <Card.Text style={{ textDecoration: 'none',width:"100%",height:"50px",textAlign:"center" }}>{product.title}</Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <Card.Text >₹{product.price}</Card.Text>
                                    <Card.Text >{product.weight}</Card.Text>
                                </div>
                                <div className='d-flex justify-content-between'>
                                
                                    <Button variant="outline-success" >Add</Button>
                                </div>
                            </Card.Body>
                        </Card>
                </div>
    </>);
}

export default Cards;

