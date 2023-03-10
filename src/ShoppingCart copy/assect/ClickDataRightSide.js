import React from "react";
import Form from 'react-bootstrap/Form';
import '../component/navbar.css';
import Button from 'react-bootstrap/Button';

function ClickDataRightSide() {
    return (
        <div className="container">
            <div className="row p-3  m-3">
                <div className="col-10 d-flex justify-content-around ">
                    <Form className="borderradious p-4 border">
                        <Form.Check>
                            <Form.Check.Input isValid />
                            <Form.Check.Label> <h4>2 x 380g</h4></Form.Check.Label>
                            <Form.Control.Feedback type="valid">
                                <h2> ₹276</h2>
                            </Form.Control.Feedback>
                        </Form.Check>
                    </Form>
                    <Form className="borderradious p-4 border">
                        <Form.Check>
                            <Form.Check.Input isValid />
                            <Form.Check.Label> <h4> 380g</h4> </Form.Check.Label>
                            <Form.Control.Feedback type="valid">
                                <h2> ₹139</h2>
                            </Form.Control.Feedback>
                        </Form.Check>
                    </Form>
                </div>
                <div>
                    <div className="mt-5">
                        <Button variant="outline-success" size="lg" className="px-5">
                            Add
                        </Button>
                    </div>
                </div>
                <div>
                    <h3 className="pt-5">Why shop from blinkit?</h3>
                    <div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=45/assets/web/blinkit-promises/10_minute_delivery.png" alt="no pic" />
                            </div>
                            <div>
                                <p className="titleheading">Superfast Delivery</p>
                                <p className="titletext">Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=45/assets/web/blinkit-promises/Best_Prices_Offers.png" alt="no pic" />
                            </div>
                            <div>
                                <p className="titleheading">Best Prices & Offers</p>
                                <p className="titletext">Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=45/assets/web/blinkit-promises/Wide_Assortment.png" alt="no pic" />
                            </div>
                            <div>
                                <p className="titleheading"> Wide Assortment</p>
                                <p className="titletext">Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClickDataRightSide;