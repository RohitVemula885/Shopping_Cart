import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },

    reducers: {
        addtocart: (state, action) => {
            const cartItem = state.items.find(item => item.id === action.payload.id)
            if (cartItem) {
                cartItem.quantity += 1
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },

        decreasecart: (state, action) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item.quantity > 1) {
                item.quantity -= 1
            }
            else {
                state.items = state.items.filter(item => item.id !== action.payload)
            }
        },

        removefromcart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },

        clearcart: (state) => {
            state.items = []
        },
        removeProductById: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }

    }
})

export const { addtocart, removefromcart, clearcart, decreasecart,removeProductById } = cartSlice.actions
export default cartSlice.reducer

