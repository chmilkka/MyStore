import { ShoppingCart } from "@mui/icons-material";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useStore } from "../stores/StoresManager";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart = ({cartOpen, cartClose}) => {

     const { productStore } = useStore();

     const [cartProducts, setCartProducts] = useState([]);

     useEffect(() => {
         const getProducts = async () => {
             const result = productStore.cartProducts
             setCartProducts(result);
         }
 
         getProducts();
     }, [productStore])

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
                {!cartProducts.length ? (
                    <ListItem>Cart is empty!</ListItem>
                ) : (
                    <>
                    {cartProducts.map((item) => (
                        <CartItem 
                        key={item.name} 
                        removeProduct={(name) => setCartProducts(cartProducts.filter(x => x.name !== name))} 
                        {...item} />
                    ))}
                    <Divider />
                    </>
                )}
            </List>
        </Drawer>
    )
}

export default Cart