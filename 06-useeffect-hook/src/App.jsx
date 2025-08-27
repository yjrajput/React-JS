import React, { useEffect, useState } from 'react'
import CounterEffect from './components/CounterEffect';
import FetchingData from './components/FetchingData';

const App = () => {
  const [value, setValue] = useState(0);
  const[somthing, setsomthing] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() =>{
      console.log("First render");
      document.title = `Increment ${value}`
  }, [value, somthing])

  useEffect(() => {
     const getdata =  async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos");

          const data = await response.json()

          if(data&& data.length){
            setData(data)
          }
      }
      getdata();
  },[])
  return (
    <div>
      <h1>Counter : {value}</h1>
      <button onClick={() => setValue(value + 1)}>Click me</button>
      <button onClick={() => setsomthing(somthing + 1)}>Click somthing</button>


      <h1>Fetch Data from Dummay API's</h1>
      {
          data.map((todos) => (
            <h2 key={todos.id}>Title : {todos.title}</h2>
          ))
      }


      <CounterEffect/>
      <FetchingData/>
    </div>
  )
}

export default App
