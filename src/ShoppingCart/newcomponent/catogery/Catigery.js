import Card from 'react-bootstrap/Card';
import '../newcomponent.css'
function CatigeryProduct({ product }) {
    return (<>
        <div style={{width:"15rem"}}>
            <div className='text-center'>
                <div>
                    <img src={product.image} alt="no pic" width={"100%"} height={130}/>
                </div>
                <div>
                    <p className='darktext pt-4'>{product.logo}</p>
                </div>
            </div>
        </div>
    </>);
}

export default CatigeryProduct;

