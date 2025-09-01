import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Examplethree = () => {
    const [name, setName] = useState(() =>{
        const savedname = localStorage.getItem("myname");
        return savedname ? JSON.parse(savedname) : "";
    })

    useEffect(() =>{
        localStorage.setItem('myname', JSON.stringify(name));
    })
    const handleOnChange = (e) =>{
        setName(e.target.value);
    }
    const handleOnClear = () =>{
        setName("")
    }
  return (
    <div>
      <h1>Name: {name}</h1>
      <input type="text" value={name} placeholder='Enter your name' onChange={handleOnChange}/>
      <button onClick={handleOnClear}>clear name</button>
    </div>
  )
}

export default Examplethree
