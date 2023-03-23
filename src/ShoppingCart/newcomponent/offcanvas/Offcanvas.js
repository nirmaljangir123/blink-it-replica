import React, { useState, useEffect } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { userDetils } from '../../mockUp/Api';
import AddButton from '../button/Button';
import { AiFillCaretRight, } from "react-icons/ai";
import '../newcomponent.css';
import { useNavigate } from 'react-router';
import Slider from '../slider/WelcomeSlide';
// reducers
import { useDispatch, useSelector } from 'react-redux';
import { Remove } from '../../slice/Reducer';
import { Add, increment, decrement } from '../../slice/Reducer'

const OffcaCart = ({ totalprice }) => {
    // console.log('userDetils', userDetils);
    const navigate = useNavigate();
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    // console.log("offcanvas in count----->", count);

    const Deliverycharge = 15;

    const totaldiscount = (totalprice * 15 / 100).toFixed(2);
    // console.log("total discount is ---->",totaldiscount);

    const handlingCharge = totalprice - totaldiscount;
    const totalallproductMrp = handlingCharge + Deliverycharge;

    return (
        <>
            <Offcanvas.Header closeButton className='bg-primary'>
                <Offcanvas.Title>My Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h5>Delivery in 14 minutes</h5>
                <p className='fs-5'> {count.length} items in the cart</p>
                {
                    count.map((items) => (
                        <div className='d-flex border border light m-2'>
                            <div>
                                <img src={items.image} alt="no pic " width={150} />
                            </div>
                            <div className='align-self-center'>
                                <h5>{items.title}</h5>
                                <h6>{items.weight}</h6>

                                {
                                    count.some((item) => item.id === items.id) ?
                                        (<div className="btn-group w-100" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-secondary" onClick={() => { dispatch(increment(items.id)) }}>+</button>
                                            {count.map((item) => item.id === items.id ? (<button type="button" className="btn btn-warning" >{item.quantity}</button>) : (<></>))}
                                            <button type="button" className="btn btn-secondary" onClick={() => { dispatch(decrement(items.id)) }}>-</button>
                                        </div>) :
                                        (
                                            <div className='w-100'>
                                                <button className="btn btn-success w-50 text-center" onClick={() => { dispatch(Add(items)) }} >Add to cart</button>
                                            </div>)
                                }
                            </div>
                        </div>

                    ))
                }


                <h4>Before you checkout</h4>
                <div>
                    {/* <ImageSlider images={images} /> */}
                    <Slider />
                </div>


                <div>
                    <h5>All product Details & Price</h5>
                    <div className='d-block '>
                        <div className='d-flex justify-content-between'>
                            <h5>MRP</h5>
                            <h5>₹ {totalprice}</h5>
                        </div>
                        <div className='d-flex justify-content-between' >
                            <h5>Total discount</h5>
                            <h5>₹ {totaldiscount}</h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h5>Handling charge </h5>
                            <h5>₹{handlingCharge}</h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h5>Delivery charge</h5>
                            <h5>₹{Deliverycharge}</h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h5>Total MRP</h5>
                            <h5>₹{totalallproductMrp}</h5>
                        </div>
                        <p>Coupons are only applicable on the Blinkit app</p>
                    </div>

                </div>
            </Offcanvas.Body>

            <div className='cartwidth1 sticky d-sm-block d-lg-flex p-3 rounded justify-content-between text-light' onClick={() => navigate("/login")}>
                <div className='d-flex'>
                    <h3>{count.length} items .</h3>
                    <h4>₹ {totalallproductMrp.toFixed(0)} </h4>
                </div>
                <div className='d-flex'>
                    <h4>Proceed</h4>
                    <h4><AiFillCaretRight /></h4>
                </div>
            </div>

        </>
    );
}

export default OffcaCart;

// count.some((item) => item.id === items.id) ?
//                                         (<div className="btn-group w-100" role="group" aria-label="Basic example">
//                                             <button type="button" className="btn btn-secondary" onClick={() => { dispatch(increment(items.id)) }}>+</button>
//                                             <button type="button" className="btn btn-warning" >{items.quantity}</button>
//                                             <button type="button" className="btn btn-secondary" onClick={() => { dispatch(decrement(items.id)) }}>-</button>
//                                         </div>) :
//                                         (
//                                             <div className='w-100'>
//                                                 <button className="btn btn-success w-50 text-center" onClick={() => { dispatch(removecart(items)) }} >Add to cart</button>
//                                             </div>)

