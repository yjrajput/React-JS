import React from 'react'
import Counter from './components.jsx/CounterProject.jsx/Counter'
import Todolist from './components.jsx/todolist/Todolist'
import Meals from './components.jsx/meals/Meals'
import Calculator from './components.jsx/claculator/Calculator'
import Toggle from './components.jsx/togglebackgroundcolor/Toggle'
import Testimonial from './components.jsx/testimonial/Testimonial'
import Accordian from './components.jsx/accordian/Accordian'
import { accordionData } from './components.jsx/accordian/data/accordian'


const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Todolist/> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      {/* <Toggle/> */}
      {/* <Testimonial/> */}
       

       <div>
        {
          accordionData.map(({question, answer}) =>(
            <Accordian title = {question} content = {answer}/>
          ))
        }
       </div>
    </div>
  )
}

export default App
