import React from 'react'

const ComponentOne = ({count, onclickHandler }) => {
  return (
    <div>
      <h1>Count pass by : {count}</h1>
      <button onClick={onclickHandler}>Add+</button>
    </div>
  )
}

export default ComponentOne
