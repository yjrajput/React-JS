import React, { useRef, useState } from 'react'

const Timer = () => {
    const timerInterval = useRef(null);
    const [counter, setCounter] = useState(0);

    const startOnClick = () =>{
        if(timerInterval.current) return;

        timerInterval.current = setInterval(() =>{
            setCounter((prev) => prev + 1)
        }, 1000)
    }
    const stopOnClick = () =>{
        clearInterval(timerInterval.current);
        timerInterval.current = null
    }
    const resetOnCLick = () =>{
        startOnClick();
        setCounter(0)
    }
  return (
    <div>
        <h1>Timer : {counter}</h1>
        <button onClick={startOnClick}>Start</button>
        <button onClick={stopOnClick}>Stop</button>
        <button onClick={resetOnCLick}>reset</button>
    </div>
  )
}

export default Timer
