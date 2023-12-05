import { AccountCircle, ShoppingCart } from "@mui/icons-material"
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { useStore } from "../stores/StoresManager";
import { useNavigate } from "react-router-dom";

function Header()
{
    const { userStore } = useStore();
    const navigate = useNavigate();


    const logout = () => {
        navigate('/logout');
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography 
                variant="h4" 
                sx={{flexGrow: 1}}
                >
                    MyStore
                </Typography>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"            
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
                <IconButton color="inherit">
                    <ShoppingCart/>                    
                </IconButton>
                <Button color="inherit" onClick={logout}>Log out</Button>              
            </Toolbar>
        </AppBar>
    );
}
export default Header