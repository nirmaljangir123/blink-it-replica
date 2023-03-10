import { userDetils } from "../mockUp/Api"
import CatogeryLiftSection from "../newcomponent/catogery/CatogeryLiftSection"
import CategoryNavbar from "../newcomponent/catogery/CatogeryNavbar"
import CatogeryRightSection from "../newcomponent/catogery/CatogeryRightSection"
import Cards from "../newcomponent/slider/Cards";
import { useNavigate } from "react-router";

export const ClickCategoryShowData = () => {
    const nevigate = useNavigate();
    return (<>
        <div >
            <CategoryNavbar />
        </div>
        <div className="container-fluid">
            <div className="row d-sm-block d-lg-flex p-4">
                <div className="col-sm-12 col-lg-3 ">
                    <div className="overflow">
                        {userDetils.map((item, key) => (
                            <div className="" key={item.id}>
                                <CatogeryLiftSection item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-sm-12 col-lg-9">
                    <div className="overflow" style={{ display: "flex", flexWrap: 'wrap', textAlign: "center",justifyContent:"center" }}>
                        {userDetils.map((item, key) => (
                            <div className="d-flex" onClick={() => nevigate("/")}>
                                <CatogeryRightSection product={item} />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>)

} 