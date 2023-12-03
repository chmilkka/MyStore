import React, {useContext} from 'react';
import Loader from './Loader/LoadingComponent';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/context';
import NotFoundPage from '../pages/NotFoundPage';


const AuthRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element = {route.element}
                        path={route.path}                     
                    />
                )}
                <Navigate to="/types"/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}                    
                    />
                )}
                  <Route path='*'element={<NotFoundPage/>}/>
                <Navigate to='/login'/>
            </Routes>
    );
};

export default AuthRouter;