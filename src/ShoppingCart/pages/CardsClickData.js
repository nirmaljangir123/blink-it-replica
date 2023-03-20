import React from "react";
import { userDetils } from "../mockUp/Api";
import { Section1 } from "./Section";
import Cards from "../newcomponent/cards/Cards";

export const ClickShowData = () => {

    return (<>
        <div className="container-fluid ">
            {/* <div>
                <NavbarMain/>
            </div> */}
            <div>
                <Section1 />
            </div>
            <div className="row">
                <h4 className="text-center pt-5">Dairy, Bread & Eggs</h4>
                <div className="" style={{ display: "flex",flexWrap:"wrap",justifyContent:"center"}}>
                    {userDetils.map((item, key) => (
                        <div className="d-flex">
                            <Cards product={item} add="Add" />
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>

    </>)
}
