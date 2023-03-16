import Navbar1 from "../thapatoolkit/component.js/Navbar";
import { Counter } from "../toolkitexample/reducers/counter";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Offer } from "./component/offerCard";
import {Cards} from "./newcomponent/slider/Cards";
import Catigery from "./component/Catergiry";
import NavbarMain from "./component/Navbar";
import PaanCorner from "./component/Paancorner";
import Snaks from "./component/SnacksMunchies";
import { CartDataShow } from "./assect/CartData";
import ShowCartData from "./component/subcomponent/CardsClinkShowData.";
import CatigertiesOfProducts from "./component/catigertiesofproducts/CatigertiesOfProducts";
import NavClickdata from "./component/catigertiesofproducts/NavClickData";
import Error from "./component/ErrorPage";
import HomePage from "./pages/Homepage";
import { ClickShowData } from "./pages/CardsClickData";
import { ClickCategoryShowData } from "./pages/Catigeroy";
import NavbarLogo from "./newcomponent/navbar/Navbarlogo";
import OffcanvasCart from "./newcomponent/offcanvas/Offcanvas";
import { OnClickSearch } from "./newcomponent/searchonclick/OnClick";
import { MicroPhone } from "./newcomponent/searchonclick/MicroPhone";
import { Login } from "./newcomponent/login/Login";
const App=()=>{
    return(
        <>
          <BrowserRouter>
          {/* <HomePage/>  */}
          {/* <NavbarMain/> */}
          <NavbarLogo/>
        {/* <ClickCategoryShowData/> */}
          {/* <ClickShowData/> */}
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
           {/* <Route path="/showdata" element={<CartDataShow/>}/>
           <Route path="/cartshowdata" element={<ShowCartData/>}/>
           <Route path="/CatProducts" element={<CatigertiesOfProducts/>}/> 
           <Route path="/Navclickdata" element={<NavClickdata/>}/>
           <Route path="/" element={<><PaanCorner/></>}/>
           <Route index element={<><PaanCorner/><Offer/><Catigery/><Cards/><Snaks/></>}/>
           <Route path="*" element={<Error/>}/> */} 
           <Route index element={<><HomePage/></>} />
           <Route path="/home" element={<><HomePage/></>}/>
           <Route path="/click-data" element={<><ClickShowData/></>}/>
           <Route path="/catogery-data" element={<><ClickCategoryShowData/></>}/>
           <Route path="/offcanvas-cart" element={<><OffcanvasCart/></>}/>
           <Route path="/search-click-data" element={<><OnClickSearch/></>} />
           <Route path="/micro-phone" element={<><MicroPhone/></>}/>
            <Route path="/login" element={<><Login/></>}/>


           </Routes>
        </BrowserRouter>
       
        {/* <Navbar/> */}
        </>
    )
}
export default App;