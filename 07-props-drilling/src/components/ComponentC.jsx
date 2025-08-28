import React from 'react'
import { Data } from '../App';
import { Data1 } from '../App';
import { useContext } from 'react';
const ComponentC = () => {

    const name = useContext(Data);
    const age = useContext(Data1)
  return (
    // <Data.Consumer>
    //   {(name) => {
    //     return  (
    //         <Data1.Consumer>
    //             {(age) => {
    //                 return <h1>Hello my name is {name} and i'm {age} year old</h1>
    //             }}
    //         </Data1.Consumer>
    //     )
    //   }}
     
    // </Data.Consumer>

     <h1>Hello my name is {name} and i'm {age} year old</h1>
  )
}

export default ComponentC
