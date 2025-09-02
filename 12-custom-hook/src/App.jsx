import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
import UseFetch from './UseFetch'

const App = () => {
  // const [data, setData] = useState([]);

  // useEffect(() =>{
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then((res) => res.json())
  //   .then((data) => setData(data))
  // },[])
  const [data] =  UseFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
      {
        data.map((items) =>(
          <li  key={items.id}>{items.title}</li>
        ))
      }
    </div>
  )
}

export default App