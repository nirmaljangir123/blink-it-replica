import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        incrementByAmount: (state, action) => {
            state.value = state.value + action.payload;
        },
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (data) => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(data))
        // console.log(data);
    }, 1000)
}

export const selectCount = (state) => state.counter.value
export default counterSlice.reducer;

