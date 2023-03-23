import React, { useState } from "react";
import { userDetils } from "../mockUp/Api";
import { catagiryOffer } from "../mockUp/Catigery";
import { OfferCard } from "../mockUp/offerApi";
import Cards from "../newcomponent/cards/Cards";
import CatigeryProduct from "../newcomponent/catogery/Catigery";
import { OfferSlide } from "../newcomponent/slider/OfferSlide";
import Slider from "../newcomponent/slider/WelcomeSlide";

const HomePage = () => {

    return (<>
        <div className="container-fluid text-center">

           

            {/*new Navbar */}
            <div>
                {/* <NewNavbar/> */}
            </div>

            {/* corner slider */}
            <div className="row">
                <Slider />
            </div>


            {/* offer cards */}
            <div className="container-fluid">
                <div className="" style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center" }}>
                    {
                        OfferCard.map((item, key) => (
                            <div key={item.id} className="m-2">
                                <OfferSlide data={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Category */}
            <div className="row">
                <div className="container">
                <h3>Categories</h3>
                    <div className="" style={{ display: "flex", flexWrap: 'wrap', justifyContent:"" }}>
                        {catagiryOffer.map((item, key) => (
                            <div className="borderbox m-2 rounded" key={item.id}>
                                <CatigeryProduct product={item} onpath="/catogery-data"/>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
            {/* Cards  */}
            <div className="row">
                <div className="container">
                <h3>Dairy, Bread & Eggs</h3>
                    <div className="" style={{ display: "flex", flexWrap: 'wrap', textAlign: "center", justifyContent: "center" }}>
                        {userDetils.map((item, key) => (
                            <div className="d-flex" >
                                <Cards product={item} key={item.id} add="Add" onpath="/click-data" />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
           
        </div>
    </>)

}
export default HomePage;
