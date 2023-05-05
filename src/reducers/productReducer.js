import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, SEARCH_PRODUCTS, CLEAR_RESULTS } from "../actions/products"

const initialState = {
    loading: false,
    products: [],
    error: '',
    searchTerm: ''
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload
            }
        case SEARCH_PRODUCTS:
            return {
                ...state,
                searchTerm: action.payload
            }
        case CLEAR_RESULTS:
            return {
                ...state,
                products: []
            }
        default: return state
    }
}

export default productReducer;