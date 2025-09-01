import React, { useReducer, useState } from 'react'

const initialValue = {count : 0}

const reducer = (state, action) =>{
    switch(action.type){
        case "increment":{
            return {count: state.count + 1};
        }
        case "decrement":{
            return {count : state.count - 1}
        }
        case "incrementByAmount":{
            return {count : state.count + action.payload }
        }
        case "decrementByAmount":{
            return {count : state.count - action.payload}
        }
        case "reset":{
            return {count : 0}
        }
        default:{
            return state;
        }
        
    }
}
const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const [input, setInput] = useState();


  return (
    <div>
        <h1>Counter : {state.count}</h1>
        
        <input type="text" placeholder='Enter amount'  onChange={(e) => setInput (e.target.value)} />


        <button onClick={() => dispatch({type: "increment"})}>increment</button>
        <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
        <button onClick={() => dispatch({type: 'incrementByAmount', payload : input})}>incrementByAmount</button>
        <button onClick={() => dispatch({type: 'decrementByAmount', payload: input})}>decrementByAmount</button>
        <button onClick={() => dispatch({type: "reset"})}>reset</button>
    </div>
  )
}

export default CounterReducer