import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import SignUp from "../pages/signUp/SignUp";

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
    }
];

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {menu.map(route => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
