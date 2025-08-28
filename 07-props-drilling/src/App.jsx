import React from 'react'
import ComponentA from './components/ComponentA'
import { createContext } from 'react';
import User from './components/User';

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "yuvraj singh rathore";
  const age = 21;
  return (
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
      <ComponentA />
      </Data1.Provider>
    </Data.Provider>

    
  )
}

export default App
