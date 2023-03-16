import Offcanvas from 'react-bootstrap/Offcanvas';
import { userDetils } from '../../mockUp/Api';
import AddButton from '../button/Button';
import { AiFillCaretRight, } from "react-icons/ai";
import '../newcomponent.css';

const OffcaCart = () => {
    // console.log('userDetils', userDetils);
    return (
        <>
            <Offcanvas.Header closeButton className='bg-primary'>
                <Offcanvas.Title>My Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h5>Delivery in 14 minutes</h5>
                <p>6 items</p>
                {userDetils.map((item) => {
                    return (
                        <div className=" border rounded m-2 p-3">
                            <div className="d-flex">
                                <div className="">
                                    <img src={item.image} alt="no pic" height={100} />
                                </div>

                                <div className=''>
                                    <h5>{item.title}</h5>
                                    <p>{item.weight}</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around">
                                <div>
                                    <h4>₹{item.price}</h4>
                                </div>

                                <div className="w-50 align-self-end">
                                    <AddButton add="ADD" />
                                </div>
                            </div>

                        </div>
                    )
                })}
                <h4>Before you checkout</h4>
            </Offcanvas.Body>

            <div className='cartwidth1 sticky d-sm-block d-lg-flex p-3 rounded justify-content-between text-light   '>
                <div className='d-flex'>
                    <h3>6 items .</h3>
                    <h4>₹ 576 </h4>
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