import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const userSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        Add(state,action)
        {
            state.push(action.payload);
        
        },
       
    }
})
export default userSlice.reducer;
export const {Add,remove}=userSlice.actions