import React, { useReducer, useState } from 'react'
import { initialState, CounterReducet } from '../CounterReducer'


const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducet, initialState);
  const [inputAmount, setInputAmount] = useState()

  const handleIncrement = () =>{
    dispatch({type: "increment"})
  }
  const handleDecrement = () =>{
    dispatch({type: "decrement"})
  }
  const handleincrementByAmount = () =>{
    dispatch({type: "incrementByAmmount", payload: Number(inputAmount)})
    setInputAmount("")
  }
  const handleDecrementByAmount = () =>{
    dispatch({type: "decrementByAmmount", payload: Number(inputAmount)})
    setInputAmount("")
  }
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <div>
          <input type="text" placeholder='Enter amount' value={inputAmount} onChange={e => setInputAmount(e.target.value)} />

          <button onClick={handleDecrementByAmount}>DecrementByAmount</button>
          <button onClick={handleincrementByAmount}>IncrementByAmount</button>
      </div>
    </div>
  )
}

export default Counter

