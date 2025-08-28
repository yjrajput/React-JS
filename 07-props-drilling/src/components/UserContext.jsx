import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const Context = createContext();


const UserContext = ({children}) => {
    const [user, setUser] = useState({name: "yuvraj"})

    const updateUser = (newName) =>{
        setUser({name: newName})
    }

  return (
    <Context.Provider value={{user, updateUser}}>
      {children}
    </Context.Provider>
  )
}

export {Context, UserContext}
