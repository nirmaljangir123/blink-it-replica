import Offcanvas from 'react-bootstrap/Offcanvas';
import { userDetils } from '../../mockUp/Api';
import AddButton from '../button/Button';
import { AiFillCaretRight, } from "react-icons/ai";
import '../newcomponent.css';
function OffcanvasCart() {
    console.log('userDetils', userDetils);
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
                        <div className="d-flex border rounded m-2">
                            <div className="">
                                <img src={item.image} alt="no pic" width="80%" />
                            </div>

                            <div>
                                <h5>{item.title}</h5>
                                <p>{item.weight}</p>
                                <h4>₹{item.price}</h4>
                            </div>

                            <div className="w-50 align-self-end">
                                <AddButton />
                            </div>
                        </div>
                    )
                })}

                <h4>Before you checkout</h4>
            </Offcanvas.Body>
            
            <div className='fixed d-flex bg-success p-3 rounded justify-content-between'>
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

export default OffcanvasCart;