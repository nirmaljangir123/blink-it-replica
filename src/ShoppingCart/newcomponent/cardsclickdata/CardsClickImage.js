import React, { useState } from "react";
import { ClickData } from "../../mockUp/CartClickShowData";
import { useNavigate } from "react-router-dom";
import '../newcomponent.css';

const CardsClickImage = () => {
    const navigate = useNavigate();
    const [SliderData, setSliderData] = useState(ClickData[0])
    const handleClick = (index) => {
        console.log("--=-=-*******>", index);
        const Slider = ClickData[index];
        setSliderData(Slider);
    }
    return (<>
        <div className="row">
            <div className="col-12">
                <div className="text-center pb-5">
                    <img src={SliderData.image} alt="no pic" width={"450px"} />
                </div>

                <div className=" d-flex border justify-content-around " >
                    {
                        ClickData.map((data, i,key) => {
                            return (<>
                                <div className="borderradious">
                                    <img key={data.id} src={data.image} onClick={() => handleClick(i)} alt="no pic" width="100px"/>
                                </div>
                            </>)
                        })
                    }
                </div>
            </div>

        </div>
    </>)
}
export default CardsClickImage;