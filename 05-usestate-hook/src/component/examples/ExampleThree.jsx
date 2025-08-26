import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

const ExampleThree = () => {
    const [name, setName] = useState(() =>{
        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName) : ""

    })

    useReducer(() => {
        localStorage.setItem("name", JSON.stringify(name))
    }, [name])

    const handleOnChange = (event) =>{
        setName(event.target.value);
        
    }
  return (
    <div>
      <h1>Your Name: {name}</h1>
      
      <input type="text" value={name} onChange={handleOnChange} />

      <button onClick={() => setName("")}>Clear name</button>
    </div>
  )
}

export default ExampleThree
