import { Container } from "@mui/material";
import ProductList from "../components/product/ProductList";

import { useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import { useDispatch } from "react-redux";
import { clearSearchResults, fetchProducts, searchProducts } from "../actions/products";

const ProductsPage = () => {
    const dispatch = useDispatch();
    const onSearchSubmit = async term => {
        // do an api call to search and update the state
        dispatch(searchProducts(term));
    }

    const clearResults = () => {
        // dispatch clear search results and fetch all products
        dispatch(fetchProducts());
    }

    return (
        <div>
            <Container maxWidth={false} justify="center">
                <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
                <ProductList/>

            </Container>
        </div>
    )
}

export default ProductsPage;