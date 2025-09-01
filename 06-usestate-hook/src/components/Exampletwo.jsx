import React from 'react'
import { useState } from 'react'

const Exampletwo = () => {
    const[randomNumber, setRandomNumber] = useState(() =>{
        const number = Math.floor(Math.random() * 100);
        return number;
    })
  return (
    <div>
      <h1>Randomnumber : {randomNumber}</h1>
      <button onClick={() => setRandomNumber(Math.floor(Math.random() * 100))}>Genrate randomNumber</button>
    </div>
  )
}

export default Exampletwo
