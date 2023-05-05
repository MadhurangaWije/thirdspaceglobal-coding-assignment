import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';

const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS
    }
}

const fetchProductsSuccess = products => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

const fetchProductsFailure = error => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchProducts = () => {
    return function(dispatch) {
        dispatch(fetchProductsRequest())
        axios.get('https://dummyjson.com/products')
            .then(response => {
                // response.data is the products
                const products = response.data
                dispatch(fetchProductsSuccess(products))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchProductsFailure(error.message))
            })
    }    
}

export const searchProducts = (term) => {
    console.log('term',term)
    return function(dispatch) {
        dispatch(fetchProductsRequest())
        axios.get(`https://dummyjson.com/products/search?q=${term}`)
            .then(response => {
                // response.data is the products
                const products = response.data
                dispatch(fetchProductsSuccess(products))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchProductsFailure(error.message))
            })
    }    
}

export const clearSearchResults = () => {
    return {
        type: CLEAR_RESULTS
    }
}