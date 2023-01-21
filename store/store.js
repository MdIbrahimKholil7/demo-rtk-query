import { apiSlice } from "@/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "../features/api/apiSlice";
import productSliceReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        product: productSliceReducer,
        // category: categorySliceReducer,
        // paginate:paginateSliceReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});

