import React, { useState } from 'react'
import './App.css'
const App = () => {
  const buttonArray = ['C', '1', '2', '+', '3', '4', '-', '5', '6' ,'*', '7', '8', '/', '9', '0', '=', '.']
  const [inputValue, setInputValue] = useState("")

  const handleOnSUbmit = (e) =>{
    e.preventDefault();
    
  }
  const handleOnCLick = (items) =>{
    setInputValue((prev) => prev + items)

    if(items === 'C'){
      setInputValue("")
    }else if(items === '='){
      setInputValue(eval(inputValue))
    }
  }
  return (
    <div className='container'>
      <form onSubmit={handleOnSUbmit}>
        <input type="text" readOnly value={inputValue} />

        <div className='btn-container'>
          {
            buttonArray.map((items, index) =>(
              <button  onClick={() =>handleOnCLick(items)} key={index}>{items}</button>
            ))
          }
        </div>
      </form>
    </div>
  )
}

export default App