import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/NavComponent/NavbarComponent";

import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Category from "../pages/Category";
import Details from "../pages/Details";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import Cart from "../pages/Cart";




const MainRouter = () => {
    return (
        <Router>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/item/:itemId" element={<Details />} />
                <Route path="/cart/:itemId" element={<Cart />} />
            </Routes>
            <FooterComponent />

        </Router>
    )
}

export default MainRouter;