import React from 'react'
import UseFecth from './UseFecth'

const App = () => {
const [data] = UseFecth("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
      {
        data && data.map((items) => (
          <h1 key={items.id}>Title : {items.title}</h1>
        ))
      }
    </div>
  )
}

export default App
