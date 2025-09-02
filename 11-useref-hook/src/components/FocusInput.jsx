import React, { useRef } from 'react'

const FocusInput = () => {
    const inputElement = useRef(null)

    const foucusInput = () =>{
        inputElement.current.focus();
    }
  return (
    <div>
        <input type="text" ref={inputElement} placeholder='Enter your name'/>
        <button onClick={() => foucusInput()}>Focus</button>
    </div>
  )
}

export default FocusInput