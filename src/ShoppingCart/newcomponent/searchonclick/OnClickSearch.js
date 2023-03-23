import { userDetils } from "../../mockUp/Api"
import { AiFillEye, AiOutlineClear, AiOutlineRise, AiOutlineHistory } from "react-icons/ai";
import './Search.css'
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

const OnClickSearch = () => {
    const navigate = useNavigate();
    const count = useSelector((state) => state.counter);

    return (<>
        <div className="container">
            <div className="d-flex">
                <h2 className="px-4"><AiOutlineHistory /></h2>
                <h4>Recent searches</h4>
                <div style={{ display:'flex',flexWrap:"wrap",justifyContent:"flex-start"}}>
                {
                    count.map((items) => (
                        <div className='d-flex border border light m-2 p-3' >
                            <img src={items.image} alt="no pic " width={100} />
                            <h5 className='align-self-center'>{items.title}</h5>
                        </div>
                        ))
                }
                </div>

            </div>
            <div className="d-flex">
                <h3 className="d-flex px-4"><AiOutlineRise /></h3>
                <h4>Trending</h4>
            </div>
            <div className="" style={{ display: "flex", flexWrap: 'wrap', justifyContent: "flex-start" }}>
                {userDetils.map((item, key) => (
                    <div className="search text-center border m-2 border border-danger rounded" key={item.id} onClick={() => navigate('/click-data')}>
                        <img src={item.image} alt="no pic" width={70} />
                        <h5 className="">{item.title}</h5>
                        <h3><AiFillEye /></h3>
                    </div>

                ))
                }
            </div>
        </div>
    </>)

}
export default OnClickSearch;
