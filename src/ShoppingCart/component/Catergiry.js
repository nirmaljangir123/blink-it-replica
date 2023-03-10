import { catagiryOffer } from "../mockUp/Catigery";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import { Offer } from "./offerCard";
function Catigery() {
    return (<>
        <div className='container-fluid mt-2 w-100'>
        <h1>Catigerties of products</h1>
        <NavLink to={"CatProducts"}>
        <div className='row col-12 justify-content-around p-0' >
            {catagiryOffer.map((product) => (
                <Card style={{ width: '10rem' }} className="m-2">
                    <Card.Img variant="top" src={product.image}/>
                </Card>
            ))}
        </div>
        <Offer />
        </NavLink>
        </div>
    </>);
}

export default Catigery;


// import { useSelector } from "react-redux"
// import { userDetils } from "../mockUp/Api"
// export const CardsDetails = () => {
//     const dispatch = useSelector((state) => state.counter);
//     // console.log(dispatch);
//     return (
//         <>
//             <div className="container-fluid mt-2 w-100">
//                 {/* <div className="container" > */}
//                 <h1>Dairy, Bread & Eggs</h1>
//                 <div className="row justify-content-around">
//                     {userDetils.map((product) => (
//                         <div className="col-2 text-center border border-1 shadow m-1 pb-3" key={product.id}>
//                             <div className="row">
//                                 <div className="col-10">
//                                     <img src={product.image} alt={product.title} />
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-10">
//                                     <p className="bg-dark w-100 text-light rounded ">
//                                     {product.title}
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-10">
//                                     <p className="fw-semibold ">₹{product.price}</p>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-10">
//                                     <p>{product.width}</p>
//                                 </div>
//                             </div>
//                             <div className="row  text-center">

//                                 <div className="col-5">
//                                     <button className="btn btn-primary">
//                                         ADD
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                     {/* </div> */}
//                 </div>

//             </div>
//         </>
//     );
// };


{/* <div classNameName="container w-100">   
            <div className="row">
                {userDetils.map((product) => (
                    <div className="col-3 text-center" key={product.id}>
                        <div className="col-10 p-4 border border-3 shadow mb-1">
                            <img src={product.image} alt="Noimage" />
                            <p>{product.title}</p>
                            <p>{product.weight}</p>
                            <div className="d-flex justify-content-between">
                                <p>₹{product.price}</p>
                                <div>
                                    <button type="button" class="btn btn-info">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div> */}
{/* {userDetils.map((product) => (
            <div key={product.id} classNameName="">
                <img src={product.image} alt="Noimage" />
                <h6>{product.title}</h6>
                <h6>{product.weight}</h6>
                <div classNameName="d-flex justify-content-between">
                    <p>₹{product.price}</p>
                    <div>
                        <button type="button" classNameName="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                    </div>
                </div>
            </div>
        ))} */}

// export const CatgeryOffer = () => {
//     return (<>
//           <div className="container-fluid mt-2 w-100">
//                 {/* <div className="container" > */}
//                 <h1>Dairy, Bread & Eggs</h1>
//                 <div className="row  justify-content-around">
//                     {catagiryOffer.map((product) => (
//                         <div className="col-2 text-center border border-1 shadow m-1 pb-2" key={product.id}>
//                             <div className="row">
//                                 <div className="col-12">
//                                     <img src={product.image} alt={product.title} />
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-12">
//                                     <p className="w-100 text-light rounded ">
//                                     {product.title}
//                                     </p>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     ))}
//                     {/* </div> */}
//                 </div>

//             </div>
//     </>)
// }