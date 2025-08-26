import React from 'react'
import { useState } from 'react'
import UsingObject from './component/UsingObject';
import ArrayOfObject from './component/ArrayOfObject';
import ComponentOne from './component/ComponentOne';
import ComponentTwo from './component/ComponentTwo';
import Exampleone from './component/examples/Exampleone';
import ExampleTwo from './component/examples/ExampleTwo';
import ExampleThree from './component/examples/ExampleThree';
import Counter from './component/Counter';
import TodoList from './component/TodoList';

const App = () => {
  const [data, setData] = useState(0);
  const [friend, setFriend] = useState(["yuvraj", "sagar"]);
  //sharing state to other component
  const [count, setCount] = useState(0)

  const handleOnClick = () =>{
      if(data > 0){
        setData(data - 1)
      }
  }

  const addNewFriend = () => {
      setFriend([...friend, "mayank"])
  }
  const removeFriend = () =>{
      setFriend(friend.filter((f) => f !== 'mayank'))
  }
  const updateFriend = () =>{
    setFriend(friend.map((f) => f === 'sagar' ? "niraj" : f))
  }
  return (
    <div>
      <h1>Count : {data}</h1>
      <button onClick={() => setData(data + 1)}>Add</button>
      <button onClick={handleOnClick}>-</button>

      <h1>Frined list</h1>
      {
         friend.map((f) => <li key={Math.random()}>{f}</li>)
      }

      <button onClick={addNewFriend}>Add new friend</button>
      <button onClick={removeFriend}>Remove friend</button>
      <button onClick={updateFriend}>Update Friend</button>


      <UsingObject/>
      <ArrayOfObject/>


      <ComponentOne count = {count} onclickHandler = {() => setCount(count + 1)}/>
      <ComponentTwo count = {count} onclickHandlerminus = {() => setCount(count - 1)}/>

        <Exampleone/>
        <ExampleTwo/>
        <ExampleThree/>
        <Counter/>
        <TodoList/>
    </div>
  )
}

export default App
