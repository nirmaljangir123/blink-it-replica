import Offcanvas from 'react-bootstrap/Offcanvas';
import { userDetils } from '../../mockUp/Api';
import AddButton from '../button/Button';
import { AiFillCaretRight, } from "react-icons/ai";
import '../newcomponent.css';
import { useNavigate } from 'react-router';
import Slider from '../slider/WelcomeSlide';
// reducers
import { useSelector } from 'react-redux';

const OffcaCart = () => {
    // console.log('userDetils', userDetils);
    const navigate = useNavigate();
    const count = useSelector((state) => state.counter);
    console.log("offcanvas in count----->", count);
    const p=0;
    return (
        <>
            <Offcanvas.Header closeButton className='bg-primary'>
                <Offcanvas.Title>My Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h5>Delivery in 14 minutes</h5>
                <p>{count.length} items in the cart</p>
                
                {
                    count.map((product) => (
                        <div className="my-4">
                            <div className="row">
                                <div className="col-3">
                                    <img
                                        src={product.image}
                                        alt="apiData"
                                        className="img-fluid img-thumbnail"
                                    />
                                </div>
                                <div className="col-9 w-50">
                                    {product.about} + Roach with Crushing....
                                    <br />
                                    <span className="text-secondary">1 pack</span>
                                </div>
                            </div>
                            <div className="row mt-1 fw-bold">
                                <div className="col-3 offset-3 ">₹{product.price}</div>
                           
                            </div>
                        </div>
                    )
                    )
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
                            <p>MRP</p>
                            <p>{}</p>
                            {console.log("total mrp ---->",totalMrp)}
                        </div>
                        <div className='d-flex justify-content-between' >
                            <p>Product discount</p>
                            <p>₹1944</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Handling charge</p>
                            <p>₹1944</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Delivery charge</p>
                            <p>₹1944</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h5>MRP</h5>
                            <h5>₹1944</h5>
                        </div>
                        <p>Coupons are only applicable on the Blinkit app</p>
                    </div>

                </div>
            </Offcanvas.Body>

            <div className='cartwidth1 sticky d-sm-block d-lg-flex p-3 rounded justify-content-between text-light' onClick={() => navigate("/login")}>
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