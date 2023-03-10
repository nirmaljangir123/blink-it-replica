import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ClickDataRightSide from "../../assect/ClickDataRightSide";
import { TitleHeading } from "../../assect/Clickdatatitleheading";
import { ClickData } from "../../mockUp/CartClickShowData";
import NavbarMain from "../Navbar";
import { userDetils } from "../../mockUp/Api";
import { Button } from "react-bootstrap";
import { Add } from "../../slice/Reducer";
import { useNavigate } from "react-router-dom";


import '../navbar.css'
const ShowCartData = () => {

    const navigate = useNavigate();
    const [SliderData, setSliderData] = useState(ClickData[0])
    const handleClick = (index) => {
        console.log("--=-=-*******>", index);
        const Slider = ClickData[index];
        setSliderData(Slider);
    }
    return (<>
        <div className="container-fluid ">
            <div className="p-4">
                <div className=" row ">
                    <div className="overflow col-sm-12 col-lg-6">
                        <div className=" row">
                            <div className="col-11 text-center">
                                <img src={SliderData.image} alt="no pic" width={"450px"} />

                            </div>

                            <div className=" d-flex border justify-content-around" >
                                {
                                    ClickData.map((data, i) => {
                                        return (<>
                                            <div className="borderradious">
                                                <img key={data.id} src={data.image} onClick={() => handleClick(i)} alt="no pic" width="100px" />

                                            </div>
                                        </>)
                                    })
                                }
                            </div>
                            <div>
                                <TitleHeading />
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-12 col-lg-6 pt-5">
                        <p className="titletext">Home / Condensed Milk / Nestle Milkmaid Sweetened Condensed Milk</p>
                        <h2>Nestle Milkmaid Sweetened Condensed Milk</h2>
                        <h3><link rel="stylesheet" href="" />Nestle Milkmaid</h3>
                        <div className="">
                            <ClickDataRightSide />
                        </div>
                    </div>

                </div>
                <div className="row">
                    <h1>You might also like</h1>
                        <div className=' row col-12 justify-content-around '>
                            {userDetils.map((product) => (
                                <Card border="success" style={{ width: '15rem',cursor:"pointer" }} className=" m-2 " key={product.id}>
                                    <Card.Img variant="top" src={product.image} onClick={()=>navigate('/CatProducts')}/>
                                    <Card.Body >
                                        <Card.Text style={{ textDecoration:'none'}}>{product.title}</Card.Text>
                                        <div className='d-flex justify-content-between'>
                                            <Card.Text >₹{product.price}</Card.Text>
                                            <Card.Text>{product.weight}</Card.Text>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <Button variant="outline-success" onClick={() => (Add(1))}>Add</Button>
                                            <span>{ }</span>
                                            {/* <Button variant="primary" onClick={()=>dispatch(remove(product))}>Remove</Button> */}
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}

                        </div>

                </div>
            </div>
        </div>
    </>)
}
export default ShowCartData;