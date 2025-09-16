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
        error:null,
        isloggedIn:false
    },

    reducers:{
        login:(state,action)=>{
            let{username,password}=action.payload

            username = username.toLowerCase();
            password = password.toLowerCase();

            const user=fakeusers.find((u)=>
                u.username === username && u.password === password
            )
            if(user){
                state.user=user
                state.error=null
                state.isloggedIn=true

            }
            else{
                state.user=null
                state.error="INVALID USER"
                state.isloggedIn=false
            }
        },
        logout:(state)=>{
            state.user=null
            state.error=null
        },
    
    }
})

export const {login,logout}=authSlice.actions
export default authSlice.reducer