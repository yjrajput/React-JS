import React from 'react'
import { useState } from 'react'

const ExampleTwo = () => {
    const [randomNumber, setRandomNumber] = useState(() => {
       return Math.floor(Math.random() * 100);
    })
  return (
    <div>
      <h1>Random Number : {randomNumber}</h1>
      <button onClick={() => setRandomNumber(Math.floor(Math.random() * 100))}>Gerrate</button>
    </div>
  )
}

export default ExampleTwo
