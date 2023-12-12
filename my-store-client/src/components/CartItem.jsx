import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const CartItem = ({ id, name, price, quantity}) => {
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}UAH
            </Typography>
            <IconButton
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default CartItem;