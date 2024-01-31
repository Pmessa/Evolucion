import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

import Home from "../pages/Home";



const MainRouter = () => {
    return (
        <Router>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

        </Router>
    )
}

export default MainRouter;