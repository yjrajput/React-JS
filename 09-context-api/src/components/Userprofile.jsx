import React from 'react'
import { Context } from './UserContext'
import { UserContext } from './UserContext'
import { useContext } from 'react'

const Userprofile = () => {
    const {user} = useContext(useContext)
  return (
    <div>
        <h1>User profile: </h1>
        <p>Name : {user.name}</p>
    </div>
  )
}

export default Userprofile