import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const Context = createContext();


const UserContext = ({Children}) => {
    const [name, setName] = useState({name: "jhon due"});
    const updateName = (newName) =>{
        setName({...name, name: newName})
    }

  return (
    <Context.Provider value={{name, updateName}}>
        {Children}
    </Context.Provider>
  )
}

export {UserContext, Context}