import { Typography } from "@mui/material";
import Header from "../components/Header";
import ProductTypesList from "../components/ProdutTypesList";

const TypesPage = () => {
    return (
        <div>
            <Header/>
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
