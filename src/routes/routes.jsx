import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import SignUp from "../pages/signUp/SignUp";
import NotFoundPage from "../pages/not-found-page/NotFoundPage";
import Cart from "../pages/cart/Cart";
import Heart from "../pages/heart/Heart";

const menu = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/signUp",
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
