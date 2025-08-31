import React from 'react'

const TimeOfDay = ({time}) => {
  return (
    <div>
      {
        time === 'morning' ? <h1>Good morning</h1> : time === 'afternoon' ? <h1>Good afternoon</h1> : time === 'evening' ? <h1>Good evening</h1> : time
      }
    </div>
  )
}

export default TimeOfDay
