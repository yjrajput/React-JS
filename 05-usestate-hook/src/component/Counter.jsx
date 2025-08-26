import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleonclick = () =>{
        setCount(count - 1)
    }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={handleonclick}>-</button>
    </div>
  )
}

export default Counter
