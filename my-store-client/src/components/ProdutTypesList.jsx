import { Grid } from "@mui/material"
import ProductType from "./ProductType";

const ProductTypesList = (props) => {

    return (        
        <Grid container spacing={3}  
        sx={{
            display: "flex",
            justifyContent: "center"

        }}>
            <ProductType/>
           <ProductType/>
           <ProductType/>
           <ProductType/>
           <ProductType/>
           <ProductType/>
           <ProductType/>
           <ProductType/>
        </Grid>
    );
};

export default ProductTypesList;