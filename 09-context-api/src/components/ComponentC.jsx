import React from 'react'
import { Data, Data1 } from '../App'
import { useContext } from 'react'
const ComponentC = () => {
    const name = useContext(Data);
    const age = useContext(Data1)
  return (
    <div>
        <h1>my name is {name} and i'm {age} year old</h1>
    </div>
  )
}

export default ComponentC