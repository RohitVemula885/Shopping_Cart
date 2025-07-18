import { createSlice } from "@reduxjs/toolkit"

const fakeusers=[
    {id:1,username:"rohit",password:"rohit123"},
    {id:2,username:"admin",password:"admin123"},
    {id:3,username:"test",password:"test123"},
    {id:4,username:"guest",password:"guest123"},
    {id:5,username:"user",password:"user123"}
]

const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        error:null
    },

    reducers:{
        login:(state,action)=>{
            const{username,password}=action.payload
            const user=fakeusers.find((u)=>
                u.username === username && u.password === password
            )
            if(user){
                state.user=user
                state.error=null
            }
            else{
                state.user=null
                state.error="INVALID USER"
            }
        },
        logout:(state)=>{
            state.user=null
            state.error=null
        }
    }
})

export const {login,logout}=authSlice.actions
export default authSlice.reducer