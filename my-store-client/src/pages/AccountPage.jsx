import { AccountCircle, FavoriteBorder, ListAlt, ShoppingCart } from "@mui/icons-material";
import { Box, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cart from "../components/Cart";

const AccountPage = () => {

  const [isCartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const ordersHistory = () => {
    navigate('orders');
  }

  const profile = () => {
    navigate('profile');
  }

    return (
      <Grid container spacing={2}>
        <Grid item xs={2} md={2}>
          <Box align='left' sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper', ml: "5px" }}>
            <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={profile}>
                  <ListItemIcon>
                    <AccountCircle/>
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={ordersHistory}>
                  <ListItemIcon>
                    <ListAlt/>
                  </ListItemIcon>
                  <ListItemText primary="Orders history" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setCartOpen(true)}>
                  <ListItemIcon>
                    <ShoppingCart/>
                  </ListItemIcon>
                  <ListItemText primary="Cart" />
                </ListItemButton>
                <Cart
                cartOpen={isCartOpen}
                cartClose={() => setCartOpen(false)}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FavoriteBorder/>
                  </ListItemIcon>
                  <ListItemText primary="Wish list" />
                </ListItemButton>
              </ListItem>
            </List>
            </nav>
            <Divider/> 
          </Box>
        </Grid>
        <Grid item xs={10} md={10}>
          <Outlet/>
        </Grid> 
      </Grid>         
    );
};

export default AccountPage;