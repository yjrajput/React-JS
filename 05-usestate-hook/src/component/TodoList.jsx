import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const [todos, setToddos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleonsubmit = (e) =>{
        e.preventDefault();
        
        if(inputValue.trim()){
            setToddos([...todos, inputValue]);
            setInputValue("")
        }
    }
  return (
    <div>
        <h1>Todos</h1>

        <form onSubmit={handleonsubmit}>
            <input type="text" placeholder='Enter your todos here' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />

            <button type='submit'>Submit</button>
        </form>

        <ul>
            {
                todos.map((todos, index) =>(
                    <li key={index}>{todos}</li>
                ))
            }
        </ul>

    </div>
  )
}

export default TodoList

