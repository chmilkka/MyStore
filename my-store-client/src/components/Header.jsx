import { AccountCircle, ShoppingCart } from "@mui/icons-material"
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"

function Header()
{
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
                <Button color="inherit">Login</Button>              
            </Toolbar>
        </AppBar>
    );
}
export default Header