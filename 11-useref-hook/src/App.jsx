import React, { useRef } from 'react'
import FocusInput from './components/FocusInput';
import Timer from './components/Timer';

const App = () => {
  const element = useRef(null);

  const handleOnClick = () =>{
      element.current.focus();
      element.current.placeholder = "Enter your name here"
  }
  
  return (
    <div>
      <input type="text" ref={element}/>
      <button onClick={handleOnClick}>Click me</button>
      <hr />
      <FocusInput/>
      <hr />
      <Timer/>
    </div>
  )
}

export default App