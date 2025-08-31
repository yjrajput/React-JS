import React from 'react'
import Person from './components/Person'
import Products from './components/Products'
import Card from './components/Card'

const About = ({name, age,image}) =>{
    return(
      <>
      <h1>Hello my name is {name} and i'm {age} year old!</h1>
      <img src={image} alt="" style={{width: "300px"}}/>
      </>
    )
}

const App = () => {
  const name = "yuvraj singh rathore"
  const age = 21
  return (
    <div>
      <About name = {name} age = {age} image = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"/>

      <Person name = "Nitish rana" age = {28}/>
      <Products name = "Laptop" price = {1500}/>

      <Card>
        <h1>This is the card for my friend</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, earum adipisci quas praesentium aliquid autem. Natus harum, repellendus in voluptate iusto cum excepturi nostrum qui enim voluptatem, itaque dolor quasi.</p>
        <button>Subscribe</button>
      </Card>
    </div>
  )
}

export default App
