import React, {useContext} from 'react';
import Loader from './Loader/Loader';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Switch } from '@mui/material';
import { AuthContext } from '../context/context';
import AllRoutes from './AllRoutes';


const AppRouter = () => {
    // const {isAuth, isLoading} = useContext(AuthContext);

    // if (isLoading) {
    //     return <Loader/>
    // }

    return (
        <AllRoutes/>
    );
};

export default AppRouter;