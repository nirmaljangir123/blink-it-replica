import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const initialState = [];//intial count of a state

const counterSlice = createSlice({
    name: 'counter',//action name
    initialState,  //intial count of a state
    reducers: {//reducers
        Add(state, action) {
            state.push(action.payload);
        },
        Remove(state, action) {
            return state.filter((item) => item.id !== action.payload)
        },
        removecart(state, action) {
            state.pop(action.payload);
        },
        increment(state, action) {
            // console.log("state in increment is ", action);
            state.map((item) => {
                if (item.id === action.payload) {
                        item.quantity++;
                }
               return item;
            })
        },
        decrement(state, action) {
            state.map(item => {
                if (item.id === action.payload) {
                    item.quantity--;
                }
                return item;
                // console.log("state in increment is ",item.quantity); 
            }).filter(item => item.quantity!==0);
        }
    }
})
export default counterSlice.reducer;
export const { Add, increment, decrement, Remove, Adds, removecart } = counterSlice.actions