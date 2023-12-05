import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductsPage from "./pages/ProductsPage";
import TypesPage from "./pages/TypesPage";
import React, { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/context";
import { ToastContainer } from "react-toastify";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import AppLoader from "./AppLoader";
import LoadingComponent from "./components/Loader/LoadingComponent";
import { useStore } from "./stores/StoresManager";



function App() {
  const stores = useStore();
  
  useEffect(() => {
    AppLoader(stores);
  }, [stores]);

  if (!stores.commonStore.appLoaded) {
    return <LoadingComponent />;
  }
  return (
  
    <BrowserRouter>
      <React.StrictMode>
        <AppRouter/>
          <ToastContainer 
            position={"bottom-right"} 
            limit={3} 
            autoClose={5000} 
            hideProgressBar={false}
          />
      </React.StrictMode>
    </BrowserRouter>
    
    
    
  );
}

export default observer (App);
