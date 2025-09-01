import React from 'react'
import { useState } from 'react'

const Exampleone = () => {
    const [count, setCounte] = useState(() =>{
        const initialvalue = 10;

        return initialvalue;
    })
  return (
    <div>
      <h1>cuont : {count}</h1>
      <button onClick={() => setCounte(count + 1)}>increment</button>
    </div>
  )
}

export default Exampleone
