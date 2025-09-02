import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className='container'>
      <h1>{counter}</h1>
      <div className='btn-container'>
      <button className='btn' onClick={() => setCounter(counter + 1)}>+</button>
      <button className='btn' onClick={() => counter > 0 ? setCounter(counter - 1) : ""}>-</button>
      </div>
    </div>
  )
}

export default App