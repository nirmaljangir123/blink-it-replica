import { useNavigate } from 'react-router';
import '../newcomponent.css'


function CatigeryProduct({ product,onpath }) {
    const navigate=useNavigate();
    // console.log("path------->")
    return (<>
        <div style={{width:"10rem",padding:"5px"}} onClick={()=>navigate(onpath)}>
            <div className='text-center'>
                <div>
                    <img src={product.image} alt="no pic" width={"100%"} height={130}/>
                </div>
                <div>
                    <p className='darktext pt-2'>{product.logo}</p>
                </div>
            </div>
        </div>
    </>);
}

export default CatigeryProduct;

