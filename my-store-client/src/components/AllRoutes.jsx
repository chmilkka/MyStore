import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProductsPage from '../pages/ProductsPage';
import TypesPage from '../pages/TypesPage';
import { Auth } from './RequiresAuth';
import { useStore } from '../stores/StoresManager';
import ProfilePage from '../pages/ProfilePage';


const AllRoutes = () => {


    return (
       
            <Routes>
                <Route index replace element={<Navigate to="/login"/>}/>
                <Route path ="/login" element={<LoginPage/>}/>
                <Route path ="/logout" element={<Logout/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path ="/profile" element={<ProfilePage/>}/>
                <Route path="/products/:type" element={<Auth ><ProductsPage /></Auth>}/>
                <Route path="/types" element={<Auth ><TypesPage/></Auth>}/>
                <Route path='*'element={<NotFoundPage/>}/>
            </Routes>   

           
    );
};

function Logout() {
    const { userStore } = useStore();

    userStore.logout();

    return (
        <Navigate to="/login" replace={true}/>
    )
}

export default AllRoutes;