import React from 'react'
import { useRef } from 'react'

const FocusInput = () => {
    const inputElement = useRef(null)

    const handleonfocus = () =>{
        inputElement.current.focus();
    }
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => handleonfocus()}>Focus</button>
    </div>
  )
}

export default FocusInput
