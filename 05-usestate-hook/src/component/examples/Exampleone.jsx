import React from 'react'
import { useState } from 'react'

const Exampleone = () => {
    const [count, setCount] = useState(() => {
        const initialCount = 10;
        return initialCount;
    })
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Exampleone
