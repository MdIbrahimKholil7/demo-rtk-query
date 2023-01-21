import { addProduct } from "./authSlice";

const { apiSlice } = require("@/api/apiSlice");


const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addUser: builder.mutation({
            query: ({ data, }) => ({
                url: `/post`,
                method: 'POST',
                body: data,
            }),
        }),
        getUser: builder.query({
            query: () => "/users",
            // async onQueryStarted(arg, { queryFulfilled, dispatch }) {
            //     const result = await queryFulfilled;
            //     console.log(result, 'result')
            //     dispatch(addProduct(result.data))
            // }
        }),
        getUserDetails: builder.query({
            query: (id) => `/users/${id}`
        }),
    })

})

export const { useAddUserMutation, useGetUserQuery, useGetUserDetailsQuery } = authApi
