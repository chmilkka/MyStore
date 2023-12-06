import { Grid } from "@mui/material"
import ProductType from "./ProductType";
import { Blender } from "@mui/icons-material";

const ProductTypesList = (props) => {

    return (        
        <Grid container spacing={3}  
        sx={{
            display: "flex",
            justifyContent: "center"

        }}>
            <ProductType type="blenders"/>
           <ProductType type="kettles"/>
           <ProductType type="refrigerators"/>
           <ProductType type="multicookerders"/>
           <ProductType/>
           <ProductType/>
           <ProductType/>
           <ProductType/>
        </Grid>
    );
};

export default ProductTypesList;