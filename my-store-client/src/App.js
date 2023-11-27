import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductsPage from "./pages/ProductsPage";
import TypesPage from "./pages/TypesPage";
import { useState } from "react";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/context";



function App() {
  const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
  return (
  //   <AuthContext.Provider value={{
  //     isAuth,
  //     setIsAuth,
  //     isLoading
  // }}>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
    
    
    /* // <Router>
    //     <Routes>
    //       <Route path ="/login" element={<LoginPage/>}/>
    //       <Route path="/register" element={<RegisterPage/>}/>
    //       <Route path="/products" element={<ProductsPage/>}/>
    //       <Route path="/types" element={<TypesPage/>}/>
    //     </Routes>
    // </Router> */
    // </AuthContext.Provider>
  );
}

export default App;
