import React, {useContext} from 'react';
import Loader from './Loader/LoadingComponent';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Switch } from '@mui/material';
import { AuthContext } from '../context/context';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProductsPage from '../pages/ProductsPage';
import TypesPage from '../pages/TypesPage';
import { Auth } from './RequiresAuth';
import { Roles } from '../models/UserModel';
import { useStore } from '../stores/StoresManager';


const AllRoutes = () => {


    return (
       
            <Routes>
                <Route path ="/login" element={<LoginPage/>}/>
                <Route path ="/logout" element={<Logout/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/products" element={<Auth ><ProductsPage /></Auth>}/>
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