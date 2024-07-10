import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import SignUp from "../pages/signUp/SignUp";
import NotFoundPage from "../pages/not-found-page/NotFoundPage";
import Cart from "../pages/cart/Cart";
import Heart from "../pages/heart/Heart";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

import Detail from "../pages/detail/Detail";

const menu = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "about",
        name: "About",
        component: About
    },
    {
        path: "contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "signUp",
        name: "Sign Up",
        component: SignUp
    },
    {
        path: "/cart",
        name: "Cart",
        component:Cart
    },
    {
        path: "/heart",
        name: "Heart",
        component:Heart
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component:Detail
    }
];

const AppRoutes = () => {
    return (
       
            <Routes>
                {menu.map(route => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
                <Route path="*" element={ <NotFoundPage />}/>
            </Routes>
       
    );
};

export default AppRoutes;
