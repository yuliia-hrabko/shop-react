import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../api/products";

const initialState = {
    products: [],
    oneProduct: {},
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                productsApi.endpoints.getAllProducts.matchFulfilled,
                (state, { payload }) => {
                    state.products = payload;
                })
            .addMatcher(
                productsApi.endpoints.getOneProduct.matchFulfilled,
                (state, { payload }) => {
                    state.oneProduct = payload;
                });
    },
});

export default productsSlice.reducer;
