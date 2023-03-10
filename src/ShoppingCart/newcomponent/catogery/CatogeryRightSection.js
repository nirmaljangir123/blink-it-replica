import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import AddButton from "../button/Button";

function CatogeryRightSection({ product }) {
    const navigate = useNavigate();
    // console.log("counter in select",counter);
    console.log("counter in product",);


    return (<>

        <div >
            <Card border="success" style={{ width: '14rem',}} className="carthover m-2 ">
                <Card.Img variant="top" src={product.image} />
                <Card.Body >
                    <Card.Text style={{ textDecoration: 'none', width: "100%", height: "50px", textAlign: "center" }}>{product.title}</Card.Text>
                        <Card.Text >₹{product.price}</Card.Text>
                    <div className='d-flex justify-content-between w-100 bg-warning'>
                        <Card.Text >{product.weight}</Card.Text>
                        <AddButton/>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </>);
}

export default CatogeryRightSection;