import React from 'react'
import Card from './components/Card'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import TimeOfDay from './components/TimeOfDay'
const ValidPassword = () => {
  return(
    <h1>Valid Password</h1>
  )
}
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid}) =>{
  if(isValid) return <ValidPassword/>
  else return <InvalidPassword/>
}
const App = () => {
  return (
    <div>
     <Password isValid = {false}/> 

     <Card/>
     <Weather temp = {26}/>
     <UserStatus isLogin = {false} isAdmin={true}/>
     <TimeOfDay time="evening"/>
    </div>
  )
}

export default App
