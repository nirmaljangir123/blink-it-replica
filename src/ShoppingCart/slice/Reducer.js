import { createSlice } from "@reduxjs/toolkit";

const initialState =[];//intial count of a state

const counterSlice = createSlice({
    name: 'counter',//action name
    initialState,  //intial count of a state
    reducers: {//reducers
        Add(state, action) {
            state.push(action.payload)
        },
        // Remove(state,action){
        //     state.count-=1;
        // }
        // increment:(state)=>{
        //     state.count+=1;
        // },
        // decrement:(state)=>{
        //     state.count-=1;
        

    }
})
export default counterSlice.reducer;
export const { Add,increment,decrement,Remove } = counterSlice.actions