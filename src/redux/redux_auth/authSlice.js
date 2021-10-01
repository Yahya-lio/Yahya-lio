import { createSlice } from "@reduxjs/toolkit";

const initileState = {
    token:null
}

const authSlice = createSlice({
    name:'auth',
    initialState:initileState,
    reducers:{
        setAuth:(state,action)=>{
            state.token = action.payload
        }
    }
})

export const {setAuth} = authSlice.actions

export default authSlice.reducer