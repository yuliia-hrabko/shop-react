import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
    reducerPath: "cartApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/carts/" }),
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => '1',
            transformResponse: (response) => {
                return response
            }
        }),
        addProductToCart: builder.mutation({
            query: (products) =>  ({ 
                url: 'add',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: 1,
                    products
                })
            }),
            transformResponse: (response) => {
                return response
            }
        }),
       

    }),
});

export const { 
    useGetCartQuery,
    useAddProductToCartMutation,
} = cartApi;
