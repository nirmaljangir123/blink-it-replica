import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount,incrementAsync,selectCount } from "./createSlice";

export function Counter(){
    const count=useSelector((state)=>state.counter.value);

    const dispatch=useDispatch();
    const[incrementAmount,setIncrementAmount]=useState('2');
    
    return(<>
        <button aria-label="Increment value" onClick={()=>{dispatch(increment())}}>+</button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={()=>dispatch(decrement())}>-</button>
        <br />
        <input aria-label="Set increment amount" value={incrementAmount} onChange={e=>setIncrementAmount(e.target.value)}/>
        <button onClick={()=>dispatch(incrementByAmount(Number(incrementAmount)))}> Add Amount</button>
        <button onClick={()=>dispatch(incrementAsync(Number(incrementAmount)))}> Add Async</button>

    </>)
}