import { ShoppingCart } from "@mui/icons-material";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useStore } from "../stores/StoresManager";
import ProductsPage from "../pages/ProductsPage";
import CartItem from "./CartItem";

const Cart = ({cartOpen, cartClose}) => {

     const { productStore } = useStore();

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
                    <ListItemText primary="Cart" />
                </ListItem>
                <Divider />
                {!productStore.cartProducts.length ? (
                    <ListItem>Корзина пуста!</ListItem>
                ) : (
                    <>
                    {productStore.cartProducts.map((item) => (
                        <CartItem key={item.name} {...item} />
                    ))}
                    <Divider />
                    </>
                )}
            </List>
        </Drawer>
    )
}

export default Cart