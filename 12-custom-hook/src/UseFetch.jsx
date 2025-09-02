import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
    })
  return (
     [data]
  )
}

export default UseFetch