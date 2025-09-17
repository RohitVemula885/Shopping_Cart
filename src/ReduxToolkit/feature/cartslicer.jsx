import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
                toast.info("Item quantity increased",{
                position:"top-right",
                autoClose:1300,
    })
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
                toast.success("Item added successfully",{
                position:"top-left",
                autoClose:1300,
    })

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
            toast.error("Item removed from cart!",{
            position:"top-center",
            autoClose:1300,
            })

        },

        clearcart: (state) => {
            state.items = []
            toast.error("Items removed from cart!",{
            position:"top-center",
            autoClose:1300,
            })

        },
        removeProductById: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }

    }
})

export const { addtocart, removefromcart, clearcart, decreasecart,removeProductById } = cartSlice.actions
export default cartSlice.reducer

