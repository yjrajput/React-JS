import React from 'react'

const UserList = () => {
    const users =[
        {id: 1, name: 'jhon', age: 24},
        {id: 2, name: 'lana', age: 34},
        {id: 3, name: 'tavis', age: 39}
    ];
  return (
    <div>
      {
        users.map(({id, name, age}) =>(
            <div key={id}>
                <h1>User name : {name}</h1>
                <p>Age : {age}</p>
            </div>
        ))
      }
    </div>
  )
}

export default UserList
