import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/NavComponent/NavbarComponent";

import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Category from "../pages/Category";
import FooterComponent from "../components/FooterComponent/FooterComponent";



const MainRouter = () => {
    return (
        <Router>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/products/:categoryId" element={<Category />} />
            </Routes>
            <FooterComponent />

        </Router>
    )
}

export default MainRouter;