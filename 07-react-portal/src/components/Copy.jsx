import React from 'react'

import { useState } from 'react'
import Popup from './Popup'

const Copy = () => {
    const [inputValue, setInputValue] = useState("")
    const [copy, setCopy] = useState(false)

    const hanleOnCopy = () =>{
        navigator.clipboard.writeText(inputValue).then(() =>{
            setCopy(true);

            setTimeout(() =>{
                setCopy(false)
            }, 1000)

            setInputValue("")
        })
    }
  return (
    <div>
      <input type="text" placeholder='Enter something' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={hanleOnCopy}>Copy</button>

      <Popup copy = {copy}/>
    </div>
  )
}

export default Copy
