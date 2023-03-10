import React from "react";
import { userDetils } from "../../mockUp/Api";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import FilterList from "./FilterList";
import { useNavigate } from "react-router-dom";

function ShowAllProductDataList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log("counter in select",counter);
    console.log("counter in product",);
    

    return (<>
        <div className='overflow container mt-2 w-100 '>
            <div>
                <FilterList />
            </div>
            <div className='row col-12 justify-content-around'>
                {userDetils.map((product) => (
                    <Card onClick={()=>navigate('/cartshowdata')} border="" style={{ width: '18rem' }} className="mt-1 " key={product.id}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body >
                                <Card.Text style={{ textDecoration: 'none' }} >{product.title}</Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <Card.Text>₹{product.price}</Card.Text>
                                    <Button variant="outline-success">Add</Button>
                                    <span>{ }</span>
                                    {/* <Button variant="primary" onClick={()=>dispatch(remove(product))}>Remove</Button> */}
                                </div>
                            </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    </>);
}

export default ShowAllProductDataList;