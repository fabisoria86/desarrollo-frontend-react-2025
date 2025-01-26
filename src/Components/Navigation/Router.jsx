import Home from "../../screens/Home.jsx";
import Product from "../../screens/Product.jsx";
import Counter from "../Counter/Counter.jsx";
import Login from "../../screens/Login.jsx";

import Think from "../../screens/Think.jsx";
import About from "../../screens/About.jsx";

import LandingPage from "../LandingPage";

import { Routes, Route } from "react-router";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
           
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Product />} />
            <Route path="think" element={<Think />} />
            <Route path="about" element={<About />} />
            <Route path="counter" element={<Counter />} />
        </Routes>
    );
}

export default Router; 