import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({name, limit = ''}) => {
                if(name === 'products') {
                    return `products?limit=${limit}`} 
                else {
                        return `products/category/${name}?limit=${limit}`}
                }, 
            transformResponse: (response) => {
                const data = response.products;
                return data
                    .sort((a, b) => b.rating - a.rating)
                    .filter((el) =>el.category === "smartphones" || el.category === "laptops");
            },
        }),
        getOneProduct: builder.query({
            query: ({id}) => `products/${id}`,
        }),
    }),
});

export const { useGetAllProductsQuery, useGetOneProductQuery } = productsApi;
