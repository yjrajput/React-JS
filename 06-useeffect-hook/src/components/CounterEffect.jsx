import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `Increment ${counter}`
    }, [counter])
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default CounterEffect
