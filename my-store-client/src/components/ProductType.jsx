import { Button, Card, CardContent, CardMedia, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom";


const ProductType = ({type, name, photo}) => {

    const navigate = useNavigate();

    const redirectToProducts = () => {
        navigate(`/products/${type}`, { replace: true });
    }

    return (
        <Grid container item xs={12} md={3}>
            <Card
            
                sx={{
                    maxWidth: 345,
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
                        width: 335,
                        height: 350,


                    }}
                />
                <CardContent >
                    
                    <Button
                    variant="text"
                    size="large"
                    fullWidth
                    onClick={redirectToProducts}
                    > 
                    {name}
                    </Button>                                 
                </CardContent>               
            </Card>
        </Grid>
    );
};

export default ProductType;