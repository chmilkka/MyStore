import { AccountCircle, ShoppingCart } from "@mui/icons-material"
import { AppBar, Button, IconButton, Toolbar } from "@mui/material"
import { useStore } from "../stores/StoresManager";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";

function Header()
{
    const { userStore } = useStore();

    const [isCartOpen, setCartOpen] = useState(false);
    const navigate = useNavigate();


    const logout = () => {
        navigate('/logout');
    }
    const profile = () => {
        navigate('/profile');
    }
    const types = () => {
        navigate('/types');
    }


    return (
        <AppBar position="static">
            <Toolbar>
                <Button
                    color="inherit" 
                    fullWidth 
                    onClick={types}
                    sx={{height: "70px", fontSize: 24, justifyContent: 'left' }}>
                        MyStore
                </Button>
                {
                    userStore.isLoggedIn
                    &&
                    <>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"            
                color="inherit"
                onClick={profile}
                >
                <AccountCircle />
                </IconButton>
                <IconButton color="inherit" onClick={() => setCartOpen(true)}>
                    <ShoppingCart/>                    
                </IconButton>
                <Cart
                cartOpen={isCartOpen}
                cartClose={() => setCartOpen(false)}
                />
                <Button color="inherit" onClick={logout}>Log out</Button>
                </>
                }                             
            </Toolbar>
        </AppBar>
    );
}
export default Header