import React from "react";
import { userDetils } from "../../mockUp/Api";

const ProductList = () => {
    
    return (<>
        <div className="container">
            <div className="overflow row">
                {userDetils.map((list) => (
                    <div className="col-12" key={list.id} >
                        <div className="hoverlist border d-flex justify-content-start ">
                            <div className="">
                                <img src={list.image} alt="no pic" width="90%" className="rounded-pill"/>
                            </div>
                            <p className="titletext1 align-self-center d-sm-block d-none">{list.title}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </>)
}
export default ProductList;
