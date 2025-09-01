import React from 'react'
import ComponentA from './components/ComponentA'
import { createContext } from 'react';
import Userprofile from './components/Userprofile';
import { UserContext } from './components/UserContext';

export const Data = createContext();
export const Data1 = createContext();
const App = () => {
  const name = "yuvraj singh rathore";
  const age = 21;
  return (
    <div>
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
      <ComponentA />
      </Data1.Provider>
    </Data.Provider>

    <UserContext.Provider>
        <Userprofile/>
    </UserContext.Provider>
    </div>
  )
}

export default App