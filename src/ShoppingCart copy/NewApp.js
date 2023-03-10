import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Offer } from "../ShoppingCart/component/offerCard";
import BasicExample from "../ShoppingCart/component/Cards";
import Catigery from "../ShoppingCart/component/Catergiry";
import NavbarMain from "../ShoppingCart/component/Navbar";
import PaanCorner from "../ShoppingCart/component/Paancorner";
import Snaks from "../ShoppingCart/component/SnacksMunchies";
import { CartDataShow } from "../ShoppingCart/assect/CartData";
import ShowCartData from "../ShoppingCart/component/subcomponent/CardsClinkShowData.";
import CatigertiesOfProducts from "../ShoppingCart/component/catigertiesofproducts/CatigertiesOfProducts";
import NavClickdata from "../ShoppingCart/component/catigertiesofproducts/NavClickData";
import Error from "../ShoppingCart/component/ErrorPage";
const NewApp=()=>{
    return(
        <>
          <BrowserRouter>
          <NavbarMain/>
          {/* <NavbarMain/>
          <PaanCorner/>
          <Offer/>
          <Catigery/>
            <BasicExample/>
            <Snaks/> */}
        <Routes>
        
            {/* <Counter/> */}
            {/* <Navbar1/> */}
           {/* <UserDetails/>  */} 
           <Route path="/showdata" element={<CartDataShow/>}/>
           <Route path="/cartshowdata" element={<ShowCartData/>}/>
           <Route path="/CatProducts" element={<CatigertiesOfProducts/>}/> 
           <Route path="/Navclickdata" element={<NavClickdata/>}/>
           <Route path="/" element={<><PaanCorner/></>}/>
           <Route index element={<><PaanCorner/><Offer/><Catigery/><BasicExample/><Snaks/></>}/>
           <Route path="*" element={<Error/>}/>

           </Routes>
        </BrowserRouter>
       
        {/* <Navbar/> */}
        </>
    )
}
export default NewApp;