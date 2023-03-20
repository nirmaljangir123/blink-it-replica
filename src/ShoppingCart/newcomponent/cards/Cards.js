import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import './Cards.css';
// reduces use 
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement, Add,Remove } from '../../slice/Reducer'; //we will be use action and work on
function Cards({ product, add, items, onpath }) {
    const navigate = useNavigate();

    // const [counter, setcounter] = useState(true);
    // const [data, setdata] = useState(1)
    // const Cheak = () => {
    //     setcounter(false);
    // }
    // const Incerment = () => {
    //     if (data => 1) {
    //         setdata(data + 1);
    //     }
    //     else {
    //         setcounter(true);
    //     }
    // }
    // const Decerment = () => {
    //     if (data <= 1) {
    //         setcounter(true);
    //     }
    //     else {
    //         setdata(data - 1);
    //     }
    // }


    // use reducers data
    const count=useSelector((state)=>state.counter)
    const dispatch=useDispatch();
    const [cartdata, setcartdata] = useState(true)
    const Cheakdata = () => {
        setcartdata(false);

    }
    console.log("Count data ====>",cartdata )

   
    return (<>
        <div >
            <Card border="success" style={{ width: '16rem' }} className="carthover m-1 p-2">

                <div className='cartwidth2 rounded fs-5 text-light text-center' onClick={() => navigate(onpath)}>{product.off}</div>
                <div className='w-100'>
                    <Card.Img variant="top" src={product.image} className="w-50 " onClick={() => navigate(onpath)} />
                </div>
               <div>{count.length}</div>
                <Card.Body onClick={() => navigate(onpath)}>
                    <Card.Text style={{ textDecoration: 'none', width: "100%", height: "45px", textAlign: "center", fontSize: "18px", fontWeight: '300px' }}>{product.title}</Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Card.Text >₹{product.price}</Card.Text>
                        <Card.Text >{product.weight}</Card.Text>
                    </div>
                </Card.Body>
                <div>
                    {/* {
                        counter ? <Button variant="outline-success" className='w-50 ' onClick={() => Cheak()}>{add}</Button> : (<div class="btn-group w-75" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" onClick={Incerment}>+</button>
                            <button type="button" className="btn btn-primary">{data}</button>
                            <button type="button" className="btn btn-primary" onClick={Decerment}>-</button>
                        </div>)

                    } */}
                    {
                        cartdata ? <Button variant="outline-success" className='w-50 ' onClick={()=>{dispatch(Add(product));Cheakdata()}}>{add}</Button> :
                         (<div class="btn-group w-75" role="group" aria-label="Basic example">
                            {/* <button type="button" className="btn btn-primary" onClick={()=>dispatch(Remove(product.id))}>-</button> */}
                            <button type="button" className="btn btn-primary" onClick={()=>dispatch(Add(product))}>+</button>
                        </div>)
                    } 
                </div>
            </Card>
        </div>
    </>);
}

export default Cards;

// {CardButton ? (
    //             <button
    //               className="btn btn-outline-success h-50 mb-3 fw-semibold"
    //               onClick={() => {
    //                 dispatch(add(product)), ChangeCardButton(),addToCart();
    //               }}
    //             >
    //               ADD
    //             </button>
    //           ) : (
    //             <div
    //               className="CartButton  btn-group h-25 "
    //               role="group"
    //               aria-label="Basic example"
    //             >
    //               <button
    //                 type="button"
    //                 className="lal btn text-light fw-semibold fs-5 "
    //                 onClick={()=>{dispatch(Remove(product.id)),removeFromCart()}}
    //               >
    //                 -
    //               </button>
    //               <button
    //                 type="button"
    //                 className="lal btn text-light fw-semibold fs-6 "
    //               >
    //                 {users.length}
    //               </button>
    //               <button
    //                 type="button"
    //                 onClick={() => dispatch(add(product))}
    //                 className="lal btn text-light fw-semibold fs-5 "
    //               >
    //                 +
    //               </button>