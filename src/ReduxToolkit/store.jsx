import { configureStore, createSlice } from "@reduxjs/toolkit";
import productSlice from "./feature/productslicer";
import cartSlice from "./feature/cartslicer"

const store=configureStore({
    reducer:{
        products:productSlice,
        cart:cartSlice
    }
})

export default store