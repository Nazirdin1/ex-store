import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Cart from "../pages/cart/Cart";

import Detail from "../pages/detail/Detail";
import CheckOut from "../pages/checkOut/CheckOut";
import Favorite from "../pages/favorite/Favorite";
import Contact from "../pages/contact/Contact";
import About from "../pages/About";
import NotFoundPage from "../pages/not-found-page/NotFounPage";

import FormExample from "../pages/signUp/Form";
import LoginExample from "../pages/signUp/Login";
<<<<<<< HEAD
import Profile1 from "../components/profile1/Profile1";
import MyAccount from "../pages/MyAccount/MyAccount";
=======
import Profile1 from "../components/profile1/Profile";
>>>>>>> 9fa736be727571c18981c3ab68c8ff03b72e9bc8

const menu = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/form",
        name: "SignUp",
        component: FormExample
    },
    {
        path: "/login",
        name: "Login",
        component: LoginExample
    },

    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component: Detail
    },
    {
        path: "/checkOut",
        name: "CheckOut",
        component: CheckOut
    },
    {
        path: "/favorite",
        name: "Favorite",
        component: Favorite
    },
    {
        path: "/profile",
        name: "Profile1",
        component: Profile1
    },
    {
        path: "/my-account",
        name: "MyAccount",
        component: MyAccount
    }
];

const AppRoutes = () => {
    return (
            <Routes>
                {menu.map(route => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
    );
};

export default AppRoutes;
