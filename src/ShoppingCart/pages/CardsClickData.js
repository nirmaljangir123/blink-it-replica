import React from "react";
import { userDetils } from "../mockUp/Api";
import CardsClickImage from "../newcomponent/cardsclickdata/CardsClickImage";
import ClickCardsRightSideData from "../newcomponent/cardsclickdata/CardsClickRight";
import { ProjectDate } from "../newcomponent/cardsclickdata/ProjectDetails";
import { Section1 } from "./Section";
import Cards from "../newcomponent/slider/Cards";
import NavbarMain from "../component/Navbar";
import { useNavigate } from "react-router";

export const ClickShowData = () => {
    const nevigate = useNavigate();

    return (<>
        <div className="container-fluid ">
            {/* <div>
                <NavbarMain/>
            </div> */}
            <div>
                <Section1 />
            </div>
            <div className="row">
                <h1>Dairy, Bread & Eggs</h1>
                <div className="container">
                    <div className="" style={{ display: "flex", flexWrap: 'wrap', textAlign: "center", justifyContent: "center" }}>
                        {userDetils.map((item, key) => (
                            <div className="d-flex" onClick={() => nevigate("/click-data")}>
                                <Cards product={item} />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>

    </>)
}


{/* <div className="row">
 <div className="container-fluid ">
<div className="col-sm-12 col-lg-6 border">
    <div>
        <div>
            <CardsClickImage />
        </div>
        <div>
            <ProjectDate />
        </div>
    </div>
</div>
<div className="col-sm-12 col-lg-6">
    <ClickCardsRightSideData />
</div>
</div>
</div> */}