import { Grid } from "@mui/material"

import ProductItem from './ProductItem'

const ProductList = (props) => {

    return (        
        <Grid container spacing={3}  
        sx={{
            display: "flex",
            justifyContent: "center"

        }} >
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>

        </Grid>
    );
};

export default ProductList;