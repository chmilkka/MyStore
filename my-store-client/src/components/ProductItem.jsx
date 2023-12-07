import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material"


const ProductItem = ({name, price, photo}) => {

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
                        height: 160,
                        width: 230,
                        padding: "10px 0px "

                    }}
                />
                <CardContent >
                    <Typography
                    variant="h5"
                       sx={{ 
                        display: "inline-block",
                        width: "200px",
                        whiteSpace: "nowrap",
                        overflow: "hidden !important",
                        textOverflow: "ellipsis"}}
                    >
                            {name}
                    </Typography>                  
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