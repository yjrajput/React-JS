import React from 'react'
import Person from './components/Person'
import Cart from './components/Cart'
const User = (props) =>{
  return (
    <>
      <img src={props.img} alt="my-image" width="300px" />
      <h1>Name : {props.name}</h1>
      <h2>Age : {props.age}</h2>
      <h3>Is married: {props.isMarried}</h3>
      <h4>Hobbies: {props.hobbies}</h4>
    </>
  )
}
const App = () => {
  const name = "yuvraj singh rathore";
  const age = 21;
  return (
    <div>
      <User name = "yuvraj singh rathore" 
      img = "https://avatars.githubusercontent.com/u/180505938?v=4"
      age = {21}
      isMarried = "false"
      hobbies = {["playing", "coding", "sleeping"]}
      />


      <Person name = {name} age = {age} />

      <Cart>
        <h1>Hello wolrd, Welcome to my webpage</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae ducimus quam quibusdam magni dolorum necessitatibus eligendi ab numquam nemo!</p>
        <br />
        <button>Subscribe</button>
      </Cart>
    </div>
  )
}

export default App
