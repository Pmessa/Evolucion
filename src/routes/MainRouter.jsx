import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/NavComponent/NavbarComponent";

import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";



const MainRouter = () => {
    return (
        <Router>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<AllProducts />} />


            </Routes>

        </Router>
    )
}

export default MainRouter;