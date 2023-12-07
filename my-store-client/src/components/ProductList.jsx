import { Grid } from "@mui/material"

import ProductItem from './ProductItem'

const ProductList = ({products}) => {

    return (        
        <Grid container spacing={3}  
        sx={{
            display: "flex",
            justifyContent: "center"
        }} >
            {products.map((item) => (
                <ProductItem   {...item} />
            ))}
           

        </Grid>
    );
};

export default ProductList;