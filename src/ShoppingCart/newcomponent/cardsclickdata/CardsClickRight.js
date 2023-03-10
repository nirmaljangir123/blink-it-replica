import React from "react";
import Form from 'react-bootstrap/Form';
import '../newcomponent.css'
import Button from 'react-bootstrap/Button';
import AddButton from "../button/Button";

function ClickCardsRightSideData() {
    return (
        <div className="row ">
            <div className="col-12 ">
                <p className="titletext">Home / Condensed Milk / Nestle Milkmaid Sweetened Condensed Milk</p>
                <h2>Nestle Milkmaid Sweetened Condensed Milk</h2>
                <h3><link rel="stylesheet" href="" />Nestle Milkmaid</h3>
            </div>
            <div className="">
               <AddButton/>
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
        </div >
    );
}

export default ClickCardsRightSideData;