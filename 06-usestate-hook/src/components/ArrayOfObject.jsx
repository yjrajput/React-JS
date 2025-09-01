import React from 'react'
import { useState } from 'react'

const CounterEffect = ({count, handleOnClick}) =>{
    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={handleOnClick}>ADD</button>
        </div>
    )
}

const ArrayOfObject = () => {
    const [count, setCounte] = useState(0)
    const [movie, setMovie] = useState([
        {id: 1, name: 'spiderman', rating: 7},
        {id: 2, name: 'superman', rating: 9}
    ])
    const updateName = () =>{
        setMovie(movie.map((m) => m.id === 1 ? {...m, 'name': 'jhon wick', rating : 10} : m))

        // setMovie(movie.map((m) => ({...m, name: 'bannaa'})))
    }
  return (
    <div>
      {
        movie.map(({id,name,rating}) =>(
            <div key={id}>
                <h1>Movie name : {name}</h1>
                <p>Rating: {rating}</p>
            </div>
        ))
      }
      <button onClick={updateName}>update movie name</button>
      <hr />

      <CounterEffect count = {count} handleOnClick = {() => setCounte(count + 1)}/>
    </div>
  )
}

export default ArrayOfObject
