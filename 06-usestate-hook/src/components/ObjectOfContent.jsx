import React from 'react'
import { useState } from 'react'

const ObjectOfContent = () => {
    const [movie, setMovie] = useState({
        name: 'Superman', rating: 8
    })

    const updateMovieRating = () =>{
        setMovie({...movie, rating: 10})
    }
  return (
    <div>
      <h1>Movie name : {movie.name}</h1>
      <p>Rating: {movie.rating}</p>
      <button onClick={updateMovieRating}>Update Rating</button>
    </div>
  )
}

export default ObjectOfContent
