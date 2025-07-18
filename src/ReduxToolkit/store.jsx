import { configureStore, createSlice } from "@reduxjs/toolkit";
import productSlice from "./feature/productslicer";
import cartSlice from "./feature/cartslicer"
import authSlice from "./feature/authslicer"

const store=configureStore({
    reducer:{
        products:productSlice,
        cart:cartSlice,
        auth:authSlice
    }
})

export default store