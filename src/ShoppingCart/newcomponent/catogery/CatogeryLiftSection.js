import React from "react";
import Button from 'react-bootstrap/Button';
import '../newcomponent.css';

const CatogeryLiftSection = ({ item }) => {

    return (<>
        <div className="row">
            <div className="hoverlist col-12 d-flex border" >
                <div className="hoverliftSection" style={{ width:"8px" }}>

                </div>
                <div className="">
                    <img src={item.image} alt="no pic" width="80%" className="rounded-pill" />
                </div>
                <div className="align-self-center d-md-block d-none">
                    <p className="titletext1  d-sm-block d-none w-100">{item.title}</p>
                </div>
            </div>

        </div>
    </>)
}
export default CatogeryLiftSection;
