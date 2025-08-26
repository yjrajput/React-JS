import React from 'react'
import { useState } from 'react'

const ArrayOfObject = () => {
    const [movie, setMovie] = useState([
        {id: 1, name: "spiderman", rating: 8},
        {id: 2, name: "superman", rating: 9},
    ]);

    const updateRating = () =>{
        setMovie(movie.map((m) => (
            m.name === "superman" ? {...m, rating: 10} : m
        )))
    }
  return (
    <div>
      {
        movie.map(({name, id, rating}) => (
            <div key={id}>
                <h1>Movie name: {name}</h1>
                <p>Rating: {rating}</p>
            </div>
        ))
      }

      <button onClick={updateRating}>Update rating</button>
    </div>
  )
}

export default ArrayOfObject
