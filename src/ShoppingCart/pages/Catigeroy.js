import { userDetils } from "../mockUp/Api"
import CatogeryLiftSection from "../newcomponent/catogery/CatogeryLiftSection"
import CategoryNavbar from "../newcomponent/catogery/CatogeryNavbar"
import CatogeryRightSection from "../newcomponent/catogery/CatogeryRightSection"
import FilterList from "../newcomponent/catogery/CatigeryFilterNavbar";
import '../newcomponent/newcomponent.css';

export const ClickCategoryShowData = () => {
    return (<>
         <CategoryNavbar />
     
        <div className="container-fluid">
            <div className="row d-flex p-4">
                <div className="col-3 ">
                    <div className="overflow">
                        {userDetils.map((item, key) => (
                            <div className="" key={item.id}>
                                <CatogeryLiftSection item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-9">
                    <div className="">
                        <FilterList />
                    </div>
                    <div className="overflow pt-5" style={{ display: "flex", flexWrap: 'wrap', textAlign: "center", justifyContent: "center" }}>
                        {userDetils.map((item, key) => (
                            <div className="d-flex" key={item.id}>
                                <CatogeryRightSection product={item} add={"Add"} />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>)

} 