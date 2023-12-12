import { ShoppingCart } from "@mui/icons-material";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const Cart = ({cartOpen, cartClose}) => {
    
    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={cartClose}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingCart />
                    </ListItemIcon>
                    <ListItemText primary="Корзина" />
                </ListItem>
                <Divider />
            </List>
        </Drawer>
    )
}

export default Cart