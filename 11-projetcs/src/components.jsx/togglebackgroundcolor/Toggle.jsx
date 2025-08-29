import React, { useState } from 'react'
import styles from './Tougle.module.css'
const Toggle = () => {
    const [backgroundColor, setBackgroundColor] = useState("#fff");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [buttonStyle, setButtonStyle] = useState("#fff")

    const handleOnCLick =()=>{
        setBackgroundColor(backgroundColor === '#fff'  ?  '#1b1b1b' : '#fff')

        setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b')

        setButtonStyle(backgroundColor === '#fff' ? '#1b1b1b' : '#fff')
    }

    
  return (
    <div className={styles.container} style={{backgroundColor, color: textColor}}>
        <button onClick={handleOnCLick} style={{buttonStyle, color: textColor, border: `3px solid ${textColor}`}}>{backgroundColor === '#1b1b1b' ? "Black Theme" : "White Theme"}</button>


        <section className='content'>
            <h1>Welcome to <br /> real wolrd...</h1>
        </section>
    </div>
  )
}

export default Toggle
