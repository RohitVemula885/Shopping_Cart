import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },

    reducers:{
        addtocart:(state,action)=>{
            const cartItem=state.items.find(item=>item.id === action.payload.id)
            if(cartItem){
                cartItem.quantity +=1
            }
            else{
                state.items.push({...action.payload,quantity:1})
            }
        },

        removefromcart:(state,action)=>{
            state.items=state.items.filter(item=>item.id !== action.payload)
        },

        clearcart:(state)=>{
            state.items=[]
        }
    }
})

export const {addtocart,removefromcart,clearcart}=cartSlice.actions
export default cartSlice.reducer

