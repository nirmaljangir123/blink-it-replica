import React from "react";
import Card from 'react-bootstrap/Card';
import AddButton from "../button/Button";

function CatogeryRightSection({ product,add }) {
    // console.log("counter in select",counter);
    return (<>

        <div >
            <Card on  border="success" style={{ width: '14rem', }} className="carthover m-2 ">
                <Card.Img  variant="top" src={product.image} />
                <Card.Body >
                    <Card.Text style={{ textDecoration: 'none', width: "100%", height: "50px", textAlign: "center" }}>{product.title}</Card.Text>
                    <Card.Text >{product.weight}</Card.Text>
                    <div className='d-flex justify-content-between '>
                        <div className="align-self-center">
                            <Card.Text >₹{product.price}</Card.Text>
                        </div>
                        <div className="w-50">
                            <AddButton add={add}/>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </>);
}

export default CatogeryRightSection;