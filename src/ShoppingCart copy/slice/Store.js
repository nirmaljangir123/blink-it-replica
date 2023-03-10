import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Reducer';
const Store11=configureStore({
    reducer:{
        counter:counterReducer,
    }
   
})
export default Store11;
