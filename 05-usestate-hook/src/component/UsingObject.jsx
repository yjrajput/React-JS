import React from 'react'
import { useState } from 'react'

const UsingObject = () => {
    const [movie, setMovie] = useState({
        name: "spiderman",
        rating: 7,
    });

    const updteRating = () =>{
        setMovie({...movie, rating: 10,name: "Superman"})
    }
  return (
    <div>
      <h1>Movie name : {movie.name}</h1>
      <p>Rating: {movie.rating}</p>

      <button onClick={updteRating}>Update rating</button>
      
    </div>
  )
}

export default UsingObject
