import React from 'react'

const UserList = () => {
    const users = [
        {id: 1, name: 'jhon', age: 25},
        {id: 2, name: 'lana', age: 35},
        {id: 3, name: 'david', age: 40},
    ]
  return (
    <div>
      {
        users.map(({id,name,age}) => (
            <div key={id}>
                <h1>Name of user : {name}</h1>
                <p>Age of user: {age}</p>
            </div>
        ))
      }
    </div>
  )
}

export default UserList
