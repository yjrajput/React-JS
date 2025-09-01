import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Fetch from './components/Fetch';

const App = () => {
  const [count, setCounte] = useState(0);
  const [something, setSomething] = useState(0);

  useEffect(() =>{
    console.log("call useEffect")
    document.title = `Increment ${count}`
  }, [count, something])
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCounte(count + 1)}>Increment</button>
      <button onClick={() => setSomething(count + 1)}>Increment</button>

      <hr />
      <Fetch/>
    </div>
  )
}

export default App
