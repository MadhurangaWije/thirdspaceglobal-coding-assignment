import { useEffect } from "react";
import { useDispatch } from "react-redux"
import  {fetchProducts}  from "../../actions/products";
import { useSelector } from "react-redux";
import Product from "./Product";
import { Container } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import NoProducts from "./NoProducts";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            <Container maxWidth={false} justify="center">
            {
            products.loading ? (<div style={{margin: '10% auto', textAlign: 'center'}}><CircularProgress /></div>) 
            : products.error ? (<div>{products.error}</div>):'' }
            { products.products.products && products.products.products.map(product => <Product key={product.id} product={product}/>) }
            {products.products.products && products.products.products.length === 0 && <NoProducts/>}
            </Container>
        </div>
    )
}

export default ProductList;