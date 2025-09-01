import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Fetch = () => {
    const [data, setData] = useState([])

    useEffect(() =>{
      const getdata = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();

            if(data){
                setData(data)
            }
        }
        getdata()
    });
  return (
    <div>
      {
        data.map(({id, title}) =>(
            <li key={id}>Title : {title}</li>
        ))
      }
    </div>
  )
}

export default Fetch
