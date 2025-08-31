import React from 'react'

const DynamicContent = () => {
    const name ="yuvraj singh rathore";
    const age = 21
    const date = new Date().getDate();

    const add = (a,b) =>{
        return a + b;
    }
  return (
    <div>
      <h1>hello my name is {name} and i'm {age} year old</h1>
      <h3>Today's date is {date}</h3>

      <p>10 + 20 is : {add(10,20)}</p>
    </div>
  )
}

export default DynamicContent
