import Catigery from "../../component/Catergiry"
import { userDetils } from "../../mockUp/Api"
import { AiFillEye, AiOutlineClear } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


export const OnClickSearch = () => {
    const navigate = useNavigate();

    return (<>

        <div className="" style={{ display: "flex",flexWrap:"wrap", justifyContent:"flex-start",width:"500"}}>
            {userDetils.map((item, key) => {
                return (
                    <div className=" border rounded m-1 text-center">
                        <div className="">
                            <img src={item.image} alt="no pic" width={70} />
                        </div>
                        <div className=" w-100 ">
                            <div className="h-100 w-75 " >
                                <h5>{item.title}</h5>
                            </div>
                            <div className="d-flex ">
                                <h1 onClick={() => navigate("/click-data")}><AiFillEye /></h1>
                                <h1 onClick={() => { }}><AiOutlineClear /></h1>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>

    </>)
}