import React from "react";
import { userDetils } from "../mockUp/Api";
import { catagiryOffer } from "../mockUp/Catigery";
import { OfferCard } from "../mockUp/offerApi";
import CatigeryProduct from "../newcomponent/catogery/Catigery";
import Cards from "../newcomponent/slider/Cards";
import { OfferSlide } from "../newcomponent/slider/OfferSlide";
import Slider from "../newcomponent/slider/WelcomeSlide";
import { useNavigate } from "react-router";

const HomePage = () => {
    const nevigate = useNavigate();
    return (<>
        <div className="container-fluid">

            {/* navbar  */}
            {/* <div className="row">
                <NavbarMain /> 
            </div> */}

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
                <h1>Categories</h1>
                <div className="container">
                    <div className="" style={{ display: "flex", flexWrap: 'wrap', textAlign: "center", justifyContent: "flex-start" }}>
                        {catagiryOffer.map((item, key) => (
                            <div className="borderbox m-2 rounded" onClick={() => nevigate("/catogery-data")}>
                                <CatigeryProduct product={item} />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
            {/* Cards  */}
            <div className="row">
                <h1>Dairy, Bread & Eggs</h1>
                <div className="container">
                    <div className="" style={{ display: "flex", flexWrap: 'wrap', textAlign: "center", justifyContent: "center" }}>
                        {userDetils.map((item, key) => (
                            <div className="d-flex " onClick={nevigate("/click-data")}>
                                <Cards product={item} add="Add"/>
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