import React from "react";
import NavbarComponent from "./NavbarComponent";
import ProductList from "./ProductList";
import ShowAllProductDataList from "./ShowAllProductList";
export default function NavClickdata() {

    return (
        <>
            <div>
                <NavbarComponent />
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
        </>
    )
}