import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
const App = () => {
  const [data, setData] = useState([])

  useEffect(() =>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res) =>{
      setData(res.data.meals)
    }).then((Error) =>{
      console.log(Error)
    })
  },[])
  return (
    <div className='container'>
      <div className='main-section'>
        {
          data.map(({strMeal, strMealThumb, idMeal}) =>(
            <div key={idMeal}>
              <img src={strMealThumb} alt="img" />
              <div className='content-container'>
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App