import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import AddButton from "../button/Button";

function CatogeryRightSection({ product, handleClick }) {
    const navigate = useNavigate();
    // console.log("counter in select",counter);
    console.log("counter in product",);
    return (<>

        <div >
            <Card on  border="success" style={{ width: '14rem', }} className="carthover m-2 ">
                <Card.Img onClick={handleClick} variant="top" src={product.image} />
                <Card.Body >
                    <Card.Text style={{ textDecoration: 'none', width: "100%", height: "50px", textAlign: "center" }}>{product.title}</Card.Text>
                    <Card.Text onClick={handleClick}>{product.weight}</Card.Text>
                    <div className='d-flex justify-content-between '>
                        <div className="align-self-center">
                            <Card.Text onClick={handleClick}>₹{product.price}</Card.Text>
                        </div>
                        <div className="w-50">
                            <AddButton />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </>);
}

export default CatogeryRightSection;