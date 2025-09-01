import React, { useReducer } from 'react'
import CounterReducer from './components/CounterReducer'

const initialValue = {count : 0}

const reducer = (state, action) =>{
  switch(action.type){
    case "increment":{
      return {...state, count: state.count + 1}
    }
    case "decrement":{
      return {...state, count: state.count - 1}
    }
    case "reset":{
      return {count: 0}
    }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>count: {state.count}</h1>
      <button onClick={() => dispatch({type: "increment"})}>increment</button>
      <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
      <button onClick={() => dispatch({type: "reset"})}>reset</button>

      <hr />
      <CounterReducer/>
    </div>
  )
}

export default App