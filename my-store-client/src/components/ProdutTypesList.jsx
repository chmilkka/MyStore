import { Grid } from "@mui/material"
import ProductType from "./ProductType";

const ProductTypesList = (props) => {

    return (        
        <Grid container spacing={3}  
        sx={{
            display: "flex",
            justifyContent: "center"

        }}>
            <ProductType type="blender" name="Blenders" photo="https://cdn.comfy.ua/media/catalog/product/b/r/braun_mq3135wh_1.jpg" />
           <ProductType type="kettle" name="Electric Kettles" photo="https://cdn.comfy.ua/media/catalog/product/r/k/rkt80-gp.jpg" />
           <ProductType type="refrigerator" name="Refrigerators" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCnV83KmtJ9gaa0r3KpN37l5-g_y71phGNA&usqp=CAU" />
           <ProductType type="multicooker" name="Multicookers" photo="https://cdn.comfy.ua/media/catalog/product/r/m/rmc508-w_001.jpg" />
           <ProductType/>
           <ProductType/>
           <ProductType/>
           <ProductType/>
        </Grid>
    );
};

export default ProductTypesList;