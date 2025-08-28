import React, { useState } from 'react'
import styles from './Todolist.module.css'
const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleOnChange = (event) =>{
        setInput(event.target.value);
    }

    const addOnClick = () =>{
        setTodos((todos) => {
           return todos.concat({
                text: input,
                id : Math.floor(Math.random() * 10)
            })
        });

        setInput("")
    }
    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id));
    };
    
    

  return (
    <div className={styles.container}>
        <section className={styles["input-container"]}>
        <input className={styles.inputfiled} type="text" placeholder='Enter todos here' value={input} onChange={handleOnChange} />

        <button onClick={addOnClick} className={styles.btn}>Add todo</button>

        <ul>
            {
                todos.map(({text, id}) => (
                    <div key={id}>
                    <li>{text}</li>
                    <button onClick={() => removeTodo(id)}>x</button>
                    </div>
                ))
            }
        </ul>
        </section>


        
    </div>
  )
}

export default Todolist
