import React from 'react'
import { useRef } from 'react'
import FocusInput from './components/FocusInput'

const App = () => {
  const inputElement = useRef(null)

  const focus = () =>{
    inputElement.current.focus()
    inputElement.current.value = "yuvraj rathore"
  }
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focus()}>Focus</button>

      <FocusInput/>
    </div>
  )
}

export default App
