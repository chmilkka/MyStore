import { Typography } from "@mui/material";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";
import { useStore } from "../stores/StoresManager";
import { useEffect, useState } from "react";

const ProductsPage = () => {
    const { type} = useParams();

    const { productStore } = useStore();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            var res = await productStore.getProductsByType(type) 
            console.log(res)
            setProducts(res);
            console.log(products)
        }

        fetchProducts();
    }, [productStore])
    
    return (
        <div>
            <Header/>
            <Typography
                variant= "h3"
                sx={{
                textAlign: 'center'
                }}
            >
                {type.toUpperCase() + "S"}
            </Typography>       
            <ProductList products={products} />
        </div>
    );
};
export default ProductsPage;
