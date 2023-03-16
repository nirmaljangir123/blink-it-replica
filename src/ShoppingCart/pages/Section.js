import AddButton from "../newcomponent/button/Button"
import CardsClickImage from "../newcomponent/cardsclickdata/CardsClickImage"
import ClickCardsRightSideData from "../newcomponent/cardsclickdata/CardsClickRight"
import Form from 'react-bootstrap/Form';
import '../newcomponent/newcomponent.css'
import Button from 'react-bootstrap/Button';
import RedioButton from "../newcomponent/button/RedioButton";


export const Section1 = () => {
    return (<>
        <div className="row">
            <section className="d-lg-flex d-sm-block border" >
                <div className="overflow col-sm-12 col-lg-6 p-5 border">
                    <section >
                        <div>
                            <CardsClickImage />
                        </div>
                        <div>
                            <h2 className="pt-5">Product Details</h2>

                            <p className="titleheading" >Key Features</p>
                            <p className="titletext">Partly skimmed, sweetened condensed milk.
                                A versatile dessert partner for mothers to create sweet stories with their families.
                                Indian & western desserts with perfect consistency, texture, and taste.
                            </p>

                            <p className="titleheading">Ingredients</p>
                            <p className="titletext">Milk Solids and Sugar.</p>

                            <p className="titleheading">Unit</p>
                            <p className="titletext">380 g</p>

                            <p className="titleheading">Packaging Type</p>
                            <p className="titletext">Can</p>

                            <p className="titleheading">Storage Tips</p>
                            <p className="titletext">Store in a cool, dry and hygienic place. After opening, refrigerate between 4 degree to 8 degree Celsius and use within 7 days.
                            </p>

                            <p className="titleheading">Usage</p>
                            <p className="titletext">It is very versatile. It mixes well and can be used in a number of ways to make your favourite desserts. Helps you get better consistency and taste of desserts compared to milk. Servings should be adjusted for children of different ages.
                            </p>

                            <p className="titleheading">Shelf Life</p>
                            <p className="titletext">8 months</p>

                            <p className="titleheading">Marketed By</p>
                            <p className="titletext">Nestlé India Limited, 100 / 101, World Trade Centre, Barakhamba Lane, New Delhi - 110 001 At: Ludhiana-Ferozepur Road, Moga-142 001, Punjab
                            </p>

                            <p className="titleheading">FSSAI License</p>
                            <p className="titletext">10012011000168</p>

                            <p className="titleheading">Country Of Origin</p>
                            <p className="titletext">India</p>

                            <p className="titleheading">Customer Care Details</p>
                            <p className="titletext">Email: info@blinkit.com
                                Customer Care Number: 1-800-208-8888</p>

                            <p className="titleheading">Expiry Date</p>
                            <p className="titletext">Please refer to the packaging of the product for expiry date.</p>

                            <p className="titleheading">Seller</p>
                            <p className="titletext">TAMS GLOBAL PRIVATE LIMITED</p>

                            <p className="titleheading">Description</p>
                            <p className="titletext">MILKMAID is rich and creamy, sweetened condensed milk - the dessert partner that helps you make a range of mouth-watering sweets at home - be it payasam, ice creams, cakes and much more. Made with high quality milk. Make and enjoy your favourite desserts after lunch, dinner or as a snack. It is very versatile. It mixes well and can be used in a number of ways to make your favourite desserts. Helps you get better consistency and taste of desserts compared to milk. Servings should be adjusted for children of different ages. Each serving of loved dessert containing approx. 45 Kcal per tablespoon.
                            </p>

                            <p className="titleheading">Disclaimer</p>
                            <p className="titletext">Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.
                            </p>
                        </div>
                    </section>
                </div>
                <div className="col-sm-12 col-lg-6 p-5">
                    <section className="">
                        <div className="col-12 ">
                            <p className="titletext">Home / Condensed Milk / Nestle Milkmaid Sweetened Condensed Milk</p>
                            <h2>Nestle Milkmaid Sweetened Condensed Milk</h2>
                            <h3><link rel="stylesheet" href="" />Nestle Milkmaid</h3>
                        </div>

                        <div className="d-flex w-100">
                            <div className="px-2">
                                <RedioButton />
                            </div>
                            <div>
                                <RedioButton />
                            </div>
                        </div>

                        <div className="w-25">
                            <AddButton add="Add"/>
                        </div>
                        <div>
                            <h3 className="pt-5">Why shop from blinkit?</h3>
                            <div>
                                <div className="d-flex justify-content-around">
                                    <div>
                                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=45/assets/web/blinkit-promises/10_minute_delivery.png" alt="no pic" />
                                    </div>
                                    <div>
                                        <p className="titleheading">Superfast Delivery</p>
                                        <p className="titletext">Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <div>
                                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=45/assets/web/blinkit-promises/Best_Prices_Offers.png" alt="no pic" />
                                    </div>
                                    <div>
                                        <p className="titleheading">Best Prices & Offers</p>
                                        <p className="titletext">Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around">
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
                    </section>
                </div>
            </section>
        </div>
    </>)
} 