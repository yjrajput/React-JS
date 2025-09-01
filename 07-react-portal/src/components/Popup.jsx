import React from 'react'
import {createPortal} from 'react-dom'
const Popup = ({copy}) => {
  return createPortal(
    <div>
      {copy ? <h1>Copy</h1> : ""}
    </div>,
    document.querySelector("#popup-content")
  )
}

export default Popup
