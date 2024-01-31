import { Typography } from "@mui/material";
import ProductTypesList from "../components/ProdutTypesList";

const TypesPage = () => {
    return (
        <div>
            <Typography
                variant= "h4"
                sx={{
                textAlign: "center"        
                }}>
                Household Appliances
            </Typography>     
            <ProductTypesList/>
        </div>
    );
};
export default TypesPage;
