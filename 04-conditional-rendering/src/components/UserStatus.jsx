import React from 'react'

const UserStatus = ({isLogin, isAdmin}) => {
  if(isAdmin && isLogin){
    return <h1>Welcome Admin</h1>
  }

  return <h1>Welcome user</h1>
}

export default UserStatus
