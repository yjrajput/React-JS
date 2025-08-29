import React, { useState } from 'react'

function Accordian({title, content}) {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className='accordian-card' key={Math.random()}>
        <div className='heander' onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <p className='icon'>{isActive ? '-' : '+'}</p>
        </div>
        <div className='card-info'>
            {isActive ? <p>{content}</p> : ""}
        </div>
    </div>
  )
}

export default Accordian
