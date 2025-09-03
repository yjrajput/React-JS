import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");
  const [buttonName, setButtonName] = useState('Switch to Dark Mode');

  const toggleTheme = () => {
    if (backgroundColor === "#fff") {
      setBackgroundColor("#1b1b1b");
      setTextColor("#fff");
      setButtonStyle("dark");
      setButtonName("Switch to Light Mode");
    } else {
      setBackgroundColor("#fff");
      setTextColor("#1b1b1b");
      setButtonStyle("white");
      setButtonName("Switch to Dark Mode");
    }
  };

  return (
    <div 
      className='container' 
      style={{ backgroundColor, color: textColor, minHeight: '100vh', padding: '20px' }}
    >
      <h1>Hello world....</h1>
      <button className={`btn btn-${buttonStyle}`} onClick={toggleTheme}>
        {buttonName}
      </button>
    </div>
  );
}

export default App;