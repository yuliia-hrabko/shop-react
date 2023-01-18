import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/products";
import cartReducer, { getTotals } from './slices/cart';
import { productsApi } from "./api/products";
import { cartApi } from "./api/cart";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware, cartApi.middleware),
});

store.dispatch(getTotals());

export default store;

