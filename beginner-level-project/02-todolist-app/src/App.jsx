import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("")
    const [dateInput, setDateInput] = useState("")
    

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const newItems = {
          inputValue, dateInput: parseInt(dateInput)
        }
        setTodos([...todos, newItems])
        setInputValue("")
        setDateInput("")
    }
    const handleOnClear = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    };
  return (
    <div className='container'>
      
        <h1>Todos </h1>
      <form onSubmit={handleOnSubmit}>
        <input className='inputField' type="text"  placeholder='Enter your todos here' value={inputValue} onChange={(e) => setInputValue( e.target.value)} />
        <input className='inputField' type="date" value={dateInput} onChange={(e) => setDateInput( e.target.value)} />
        <button className='btn add-btn' type='submit'>Add</button>
      </form>
      

      <ul>
        {
            todos.map((items, index) =>(
                <div className='result-container' key={index}>
                <li >{items.inputValue} </li>
                <li>{items.dateInput}</li>
                <button className='btn remove-btn' onClick={()=> handleOnClear(index)}>X</button>
                </div>
            ))
        }
      </ul>
    </div>
  )
}

export default App
