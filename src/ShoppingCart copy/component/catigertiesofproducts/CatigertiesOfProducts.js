import React from "react";
import NavbarComponent from "./NavbarComponent";

import ProductList from "./ProductList";
import ShowAllProductDataList from "./ShowAllProductList";


const CatigertiesOfProducts = () => {
    return (<>
        <div className="container-fluid shadow-lg p-3 mb-2 bg-body rounded">
            <NavbarComponent/>
        </div>
        <div className="row">
            <div className="d-lg-flex">
                <div className="col-sm-12 col-lg-3 ">
                    <ProductList />
                </div>
                <div className="col-sm-12 col-lg-9">
                    <ShowAllProductDataList />
                </div>
            </div>
        </div>
    </>)
}
export default CatigertiesOfProducts;