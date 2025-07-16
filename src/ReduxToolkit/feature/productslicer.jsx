import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct=createAsyncThunk(
    "products/fetchProduct",
    ()=>{
        return fetch("https://fakestoreapi.com/products/")
        .then((response)=>{
            if(!response.ok){
                throw new Error("failed to fetch products")
            }
            return response.json()
        })
        .then((data)=>data)
        .catch((error)=>{
            throw error
        })
    }
)

const productSlice=createSlice({
    name:"products",
    initialState:{
        products:[],
        loading:false,
        error:null
    },

    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})

export default productSlice.reducer