import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/home/HomePage"

const menu = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    }
]


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {menu.map( route => <Route path={route.path} Component={route.component} />)}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes