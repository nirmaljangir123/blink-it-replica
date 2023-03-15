import '../newcomponent.css'
function CatigeryProduct({ product }) {
    return (<>
        <div style={{width:"10rem",padding:"5px"}}>
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

