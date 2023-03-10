import Carousel from 'react-bootstrap/Carousel';
import { paanCornerApi } from '../mockUp/paancornerapi';

function PaanCorner() {
  return (
    <>
    <div className='container-fluid  mt-3 mb-4'>
        <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 "
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg"
          alt="First slide" height="350px"
        />
      </Carousel.Item>
      
    </Carousel>
    </div>
  </>);
}

export default PaanCorner;

// import React from "react";

// const Paan=()=>{
//     return(<>
//             <div className="container-fluid">
//                 <img className="paan" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg" alt="No paan corner" />
//             </div>
//     </>)
// }
// export default Paan;