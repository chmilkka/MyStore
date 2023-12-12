import { CloseOutlined, ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material"
import ProductModal from "./ProductModal";
import { useStore } from "../stores/StoresManager";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";


const ProductItem = ({id, type, name, price, photo, description, removeProduct}) => {

    const { userStore } = useStore();
    const { productStore } = useStore();

    const currentUser = userStore.user;

    
    const submit = async () => {
            
        try {
            await productStore.removeProduct(id, type)
            removeProduct(id);
            toast.success("Your product has been successfully removed!")           
        } catch (error) {
            toast.error("Failed to remove product")
        }
      }

      const addProductToCart= async () => {
        const product = {
            id: id,
            type: type,
            name: name,
            price: price,
            photo: photo
        }; 
            
        try {
            await productStore.addProductToCart(product) 
            toast.success("Product added to cart!")           
        } catch (error) {
            toast.error("Failed to remove product")
        }
      }

    return (
        <Grid container item xs={12} md={2.3}>
            
            <Card
                sx={{
                    padding: "5px 10px",
                    height: '100%',
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                }}
            >
                {
                     currentUser.role === "Admin"
                     &&
                     <>
                        <IconButton onClick={submit}
                            sx={{ float: "right"}}>
                            <CloseOutlined/>
                        </IconButton>
                     </>
                }
               
                <CardMedia
                    image={photo}
                    component="img"
                    alt= " "
                    title= " "
                    sx={{ 
                        height: 220,
                        width: 230,
                        padding: "10px 0px "

                    }}
                />
                
                <CardContent >
                    
                    <ProductModal name = {name} price = {price} photo = {photo} description={description} />                 
                    <Typography variant="body1">Price: {price} UAH.</Typography>
                </CardContent>
                <CardActions>
                <IconButton color="inherit" onClick={addProductToCart}>
                    <ShoppingCart/>                    
                </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductItem;