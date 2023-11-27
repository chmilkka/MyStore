import { Typography } from "@mui/material";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { CenterFocusStrong } from "@mui/icons-material";

const ProductsPage = () => {
    return (
        <div>
            <Header/>
            <Typography
                    variant= "h3"
                       sx={{
                        textAlign: "center"        
                      }}
                    >
                            Name
                    </Typography>       
            <ProductList/>
        </div>
    );
};
export default ProductsPage;
