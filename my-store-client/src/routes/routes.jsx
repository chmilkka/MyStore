import LoginPage from "../pages/LoginPage"
import ProductsPage from "../pages/ProductsPage"
import RegisterPage from "../pages/RegisterPage"
import TypesPage from "../pages/TypesPage"

export const privateRoutes = [
    {path: "/types", element :<TypesPage/>},
    {path: '/products', element :<ProductsPage/>},
]

export const publicRoutes = [
    {path: "/login", element :<LoginPage/>},
    {path: "/register", element :<RegisterPage/>},
]