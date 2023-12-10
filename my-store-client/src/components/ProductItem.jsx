import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material"
import ProductModal from "./ProductModal";


const ProductItem = ({name, price, photo, description}) => {

    return (
        <Grid container item xs={12} md={2.3}>
            <Card
                sx={{
                    padding: "5px 10px",
                    height: '100%',
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                }}
            >
                
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
                <IconButton color="inherit">
                    <ShoppingCart/>                    
                </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductItem;