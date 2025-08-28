import React, { useState } from 'react'
import styles from './Counter.module.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleOnIncrement = () =>{
        setCount(count + 1)
    }
    const handleOndecrement = () =>{
        if(count >0 )
        setCount(count - 1)
    }
  return (
    <div className={styles.container}>
      <h1>{count}</h1>
    
    <div className={styles["btn-container"]}>
      <button className={styles.btn} onClick={handleOnIncrement}>+</button>
      <button className={styles.btn} onClick={handleOndecrement}>-</button>
      </div>
    </div>
  )
}

export default Counter
