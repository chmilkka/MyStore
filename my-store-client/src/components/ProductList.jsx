import { Grid } from "@mui/material"

import ProductItem from './ProductItem'

const ProductList = ({products, removeProduct}) => {
    return (        
        <Grid container spacing={3}  
        sx={{
            display: "flex",
            justifyContent: "center"
        }} >
            {products.map((item) => (
                <ProductItem removeProduct={removeProduct}  {...item} />
            ))}
           

        </Grid>
    );
};

export default ProductList;