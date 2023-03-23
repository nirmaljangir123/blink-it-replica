import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import './Cards.css';
// reduces use 
import { useDispatch, useSelector } from 'react-redux';
import { Add, increment, Remove, decrement } from '../../slice/Reducer'; //we will be use action and work on


function Cards({ product, add, items, onpath }) {
    const navigate = useNavigate();
    // console.log("quantity is in mock up0000000>",product.quantity)
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
    const count = useSelector((state) => state.counter);
    console.log("count======>", count);
    const dispatch = useDispatch();


    const addToCart = () => {
        dispatch(Add(product));
    }



    return (<>
        <div >
            <Card border="success" style={{ width: '16rem' }} className="carthover m-1 p-2">

                <div className='cartwidth2 rounded fs-5 text-light text-center' onClick={() => navigate(onpath)}>{product.off} % off</div>
                <div className='w-100'>
                    <Card.Img variant="top" src={product.image} className="w-50 " onClick={() => navigate(onpath)} />
                </div>
                <Card.Body onClick={() => navigate(onpath)}>
                    <Card.Text style={{ textDecoration: 'none', width: "100%", height: "45px", textAlign: "center", fontSize: "18px", fontWeight: '300px' }}>{product.title}</Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Card.Text >₹{product.price}</Card.Text>
                        <Card.Text >{product.weight}</Card.Text>
                    </div>
                </Card.Body>
                {
                    count.some((item) => item.id === product.id && item.quantity !=0) ?
                        (<div className="btn-group w-100" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary" onClick={() => { dispatch(increment(product.id)) }}>+</button>
                           {
                            count.map((item)=>item.id===product.id?( <button type="button" className="btn btn-secondary">{item.quantity}</button>):(<></>))
                           }
                            <button type="button" className="btn btn-secondary" onClick={() => { dispatch(decrement(product.id)) }}>-</button>
                        </div>) :
                        <div className='w-100'>
                            <button className="btn btn-success w-50 text-center" onClick={addToCart} >Add to cart</button>
                        </div>

                }

            </Card>
        </div>
    </>);
}

export default Cards;



// const [counter, setcounter] = useState(true);
//     const [data, setdata] = useState(1)
//     const Cheak = () => {
//         setcounter(false);
//     }
//     const Incermentdata = () => {
//         if (data => 1) {
//             setdata(data + 1);
//         }
//         else {
//             setcounter(true);
//         }
//     }
//     const Decermentdata = () => {
//         if (data <= 1) {
//             setcounter(true);
//         }
//         else {
//             setdata(data - 1);
//         }
//     }


// counter ? <div className='w-100'>
// <button className="btn btn-success w-50 text-center" onClick={() =>{ dispatch(Add(product));Cheak()}} >Add to cart</button>
// </div> :
// count.some((item) => item.id === product.id) ?
//     (<div className="btn-group w-100" role="group" aria-label="Basic example">
//         <button type="button" className="btn btn-secondary" onClick={() => { dispatch(increment(product.id)); Incermentdata() }}>+</button>
//         <button type="button" className="btn btn-warning">{data}</button>
//         <button type="button" className="btn btn-secondary" onClick={() => { dispatch(decrement(product.id)); Decermentdata() }}>-</button>
//     </div>) :
//     <div className='w-100'>
//         <button className="btn btn-success w-50 text-center" onClick={() => { dispatch(Add(product)); Cheak() }} >Add to cart</button>
//     </div>


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