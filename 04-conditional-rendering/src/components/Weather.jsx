import React from 'react'

const Weather = ({temp}) => {
  return (
    <div>
      {
        temp < 15 ? <h1>Its cool outside</h1> : temp > 15 && temp < 25 ? <h1>Its nice outside</h1> : temp > 25 ? <h1>Its hot outside</h1> : temp
      }
    </div>
  )
}

export default Weather
