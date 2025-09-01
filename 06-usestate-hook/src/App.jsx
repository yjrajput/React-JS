import React from 'react'
import { useState } from 'react'
import Arrayofcontent from './components/Arrayofcontent';
import ObjectOfContent from './components/ObjectOfContent';
import ArrayOfObject from './components/ArrayOfObject';
import Exampleone from './components/Exampleone';
import Exampletwo from './components/Exampletwo';
import Examplethree from './components/Examplethree';
import TodoList from './components/TodoList';
import Profile from './components/Profile';
import ShpopingList from './components/ShpopingList';

const App = () => {
  const [counter, setCounter] = useState(0);

  // const handleOnAdd = () =>{
  //     const counte = counter + 1;
  //     console.log(counte)
  // }

  return (
    <div>
      <h1>counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <hr />
      <Arrayofcontent/>
      <hr />
      <ObjectOfContent/>
      <hr />
      <ArrayOfObject/>
      <hr />
      <Exampleone/>
      <hr />
      <Exampletwo/>
      <hr />
      <Examplethree/>
      <hr />
      <TodoList/>
      <hr />
      <Profile/>
      <hr />
      <ShpopingList/>
    </div>
  )
}

export default App
