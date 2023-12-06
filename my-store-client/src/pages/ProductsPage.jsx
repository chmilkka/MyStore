import { Typography } from "@mui/material";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
    const { type } = useParams();
    
    return (
        <div>
            <Header/>
            <Typography
                variant= "h3"
                sx={{
                textAlign: 'center'
                }}
            >
                Name
            </Typography>       
            <ProductList/>
        </div>
    );
};
export default ProductsPage;
