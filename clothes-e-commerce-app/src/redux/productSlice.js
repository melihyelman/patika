import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        activeProduct: {},
    },
    reducers: {
        getAllProducts: (state, action) => {
            state.products = action.payload;
        },
        getProduct: (state, action) => {
            state.activeProduct = action.payload;
        }
    }
})

export const getAllProductsAsync = () => async dispatch => {
    try {
        const result = await axios(`${process.env.REACT_APP_BASE_ENDPOINT}/products`)
        dispatch(getAllProducts(result.data))
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const getProductAsync = (id) => async dispatch => {
    try {
        const result = await axios(`${process.env.REACT_APP_BASE_ENDPOINT}/products/${id}`)
        dispatch(getProduct(result.data))
        return result.data
    } catch (e) {
        console.log(e)
    }
}

export const { getAllProducts, getProduct } = productSlice.actions;

export default productSlice.reducer;