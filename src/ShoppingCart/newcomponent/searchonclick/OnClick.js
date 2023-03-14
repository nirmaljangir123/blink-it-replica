import Catigery from "../../component/Catergiry"
import { userDetils } from "../../mockUp/Api"
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


export const OnClickSearch = () => {
    const navigate = useNavigate();

    return (<>
        {
            userDetils.map((item,key) => {
                return (
                    <div className="d-flex w-25 border rounded m-2">
                        <div className="">
                            <img src={item.image} alt="no pic" width="80%" />
                        </div>
                        <div >
                            <h5>{item.title}</h5>
                            <h1 onClick={()=>navigate("/click-data")}><AiFillEye/></h1>
                            <h1 onClick={()=>{}}><AiFillEyeInvisible/></h1>
                        </div>

                    </div>
                )
            })
        }

    </>)
}