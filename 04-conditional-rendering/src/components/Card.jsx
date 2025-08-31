import React from 'react'

const Card = () => {
    const items = ['Headphone', 'Laptop', 'Computer', 'Charger', 'Mobile'];


  return (
    <div>
      <h1>Card items...</h1>

      {
        // items.length ? <ul><li>{items}</li></ul> : <h1>You have no any items in bag</h1>
        items.length && <ul><li>{items}</li></ul>
      }
    </div>
  )
}

export default Card
