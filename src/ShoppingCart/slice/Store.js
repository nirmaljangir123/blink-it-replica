import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Reducer';
const Store=configureStore({
    reducer:{
        counter:counterReducer,
    }
   
})
export default Store;
    