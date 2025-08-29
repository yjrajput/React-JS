import React, { useEffect, useState } from 'react'
import styles from './Meals.module.css'
import axios from 'axios'
const Meals = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) =>{
            setData(res.data.meals)
        }).catch((error) =>{
            console.log(error)
        })
    },[])
  return (
    <div className={styles["main-container"]}>
      {
        data.map(({strMeal, strMealThumb, idMeal}) =>(
            <div className={styles.container} key={idMeal}>
                
                <img src={strMealThumb} alt="Iamges" />
                

                <div className={styles["content-container"]}>
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Meals
