import React from 'react'

const Greeting = ({timeOfDay}) => {
  return (
    <div>
      {
         timeOfDay === 'morning' ? <h1>Good Morning</h1> : timeOfDay === 'afternoon' ? <h1>Good Afternoon</h1> : timeOfDay === 'night' ? <h1>Good Night</h1> : timeOfDay
      }
    </div>
  )
}

export default Greeting
