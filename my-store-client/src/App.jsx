import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import { observer } from "mobx-react-lite";
import AppLoader from "./AppLoader";
import LoadingComponent from "./components/Loader/LoadingComponent";
import { useStore } from "./stores/StoresManager";
import Header from "./components/Header";



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
        <Header></Header>
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
