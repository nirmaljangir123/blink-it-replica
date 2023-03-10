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
const App=()=>{
    return(
        <>
          <BrowserRouter>
          {/* <HomePage/>  */}
          <NavbarMain/>
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
           <Route path="/" element={<><HomePage/></>}/>
           <Route path="/click-data" element={<><ClickShowData/></>}/>


           </Routes>
        </BrowserRouter>
       
        {/* <Navbar/> */}
        </>
    )
}
export default App;