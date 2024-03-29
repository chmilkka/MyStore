import { Typography } from "@mui/material";
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
            const result = await productStore.getProductsByType(type) 
            setProducts(result);
        }

        fetchProducts();
    }, [productStore])
    
    return (
        <div>
            <Typography
                variant= "h3"
                sx={{
                textAlign: 'center'
                }}
            >
                {type.toUpperCase() + "S"}
            </Typography>       
            <ProductList products={products} removeProduct={(id) => setProducts(products.filter(x => x.id !== id))} />
        </div>
    );
};
export default ProductsPage;
