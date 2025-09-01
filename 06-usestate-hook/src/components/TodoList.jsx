import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("")

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        setTodos([...todos, inputValue])
        setInputValue("")
    }
    const handleOnClear = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    };
  return (
    <div>
        <h1>Todos : </h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text"  placeholder='Enter your todos here' value={inputValue} onChange={(e) => setInputValue( e.target.value)} />
        <button type='submit'>Submit</button>
      </form>

      <ul>
        {
            todos.map((items, index) =>(
                <div key={index}>
                <li >{items}</li>
                <button onClick={() => handleOnClear(index)}>X</button>
                </div>
            ))
        }
      </ul>
    </div>
  )
}

export default TodoList
