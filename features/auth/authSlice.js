import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.product = action.payload
        }
    },
})

export const { addProduct } = authSlice.actions
export default authSlice.reducer