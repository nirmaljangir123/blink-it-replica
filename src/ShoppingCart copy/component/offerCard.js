import { OfferCard } from "../mockUp/offerApi"
export const Offer = () => {
    return (<>
        <div className="container-fluid">
            <div className="row ">
            <div className="d-flex">
                {OfferCard.map((product) => (
                    <div className="col-md-3">
                        <img src={product.image} alt="np pic" width="95%"/>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </>)
}