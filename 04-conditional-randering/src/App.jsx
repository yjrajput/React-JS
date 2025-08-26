import React from 'react'
import Greeting from './component/Greeting'
import Wather from './component/Wather'
import UserStatus from './component/UserStatus'
const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Card = () =>{
    const item = ["laptop", 'headphone', 'mobile'];

    return (
      <div>
        <h1>Card </h1>
        {
          item.length > 0 && item.map((items) => <p>{items}</p>)
        }
      </div>
    )
}

const Password = ({isLogin}) =>{
  if(isLogin){
    return <ValidPassword/>
  }else{
    return <InvalidPassword/>
  }
}
const App = () => {
  return(
    <>
    <Password isLogin = {false}/>

    <Card/>
    <Wather temp = {14}/>
    <UserStatus loggedIn = {true} isAdmin = {false}/>
    <Greeting timeOfDay = "morning"/>

    </>
  )
  
}

export default App
