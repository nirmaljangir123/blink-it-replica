import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import { ClickShowData } from "./pages/CardsClickData";
import { ClickCategoryShowData } from "./pages/Catigeroy";
import NavbarLogo from "./newcomponent/navbar/NavbarLogo";
import OnClickSearch from "./newcomponent/searchonclick/OnClickSearch"
import OffcanvasCart from "./newcomponent/offcanvas/Offcanvas";
import { MicroPhone } from "./newcomponent/searchonclick/MicroPhone";
import { Login } from "./newcomponent/login/Login";
const App = () => {
  return (
    <>
      <BrowserRouter>

        <NavbarLogo />
        <Routes>
          <Route index element={<HomePage />} />
          <Route  path={"/"} element={<HomePage />} />
          <Route path="/click-data" element={<ClickShowData />} />
          <Route path="/catogery-data" element={<ClickCategoryShowData />} />
          <Route path="/offcanvas-cart" element={<OffcanvasCart />} />
          <Route path="/search" element={<OnClickSearch />} />
          <Route path="/micro-phone" element={<MicroPhone />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      
    </>
  )
}
export default App;