import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";
import { useStore } from "../stores/StoresManager";
import { toast } from "react-toastify";

const CartItem = ({ id, name, price, quantity, removeProduct}) => {
    const { productStore } = useStore();


    const removeProductFromCart= async () => {
            
        try {
            await productStore.removeProductFromCart(name)
            removeProduct(name);
            toast.success("Product removed from cart!")           
        } catch (error) {
            toast.error("Failed to remove product")
        }
      }

    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}UAH
            </Typography>
            <IconButton
            onClick={removeProductFromCart}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default CartItem;