import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../api/cart";

const initialState = {
    cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart(state, action) {
            const itemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.product.id
            );

            if (itemIndex >= 0) {
                state.cart[itemIndex].cartQuantity += action.payload.quantity;
            } else {
                const tempProduct = {
                    ...action.payload.product,
                    cartQuantity: action.payload.quantity,
                };
                state.cart.push(tempProduct);
            }

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeProductFromCart(state, action) {
            const nextCartItems = state.cart.filter(
                (item) => item.id !== action.payload.id
            );
            state.cart = nextCartItems;

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        minusProducFromCart(state, action) {
            const itemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cart[itemIndex].cartQuantity > 1) {
                state.cart[itemIndex].cartQuantity -= 1;
            } else if (state.cart[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cart.filter(
                    (item) => item.id !== action.payload.id
                );
                state.cart = nextCartItems;
            }

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        getTotals(state, action) {
            let { total, quantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity, discountPercentage } =
                        cartItem;
                    const discountPrice = Math.round(
                        price - price * (discountPercentage / 100)
                    );
                    const itemTotal = discountPrice * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                cartApi.endpoints.getCart.matchFulfilled,
                (state, { payload }) => {
                    state.cart = payload;
                }
            )
            .addMatcher(
                cartApi.endpoints.addProductToCart.matchFulfilled,
                (state, { payload }) => {
                    state.cart = payload;
                }
            );
    },
});

export const {
    addProductToCart,
    removeProductFromCart,
    minusProducFromCart,
    getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
