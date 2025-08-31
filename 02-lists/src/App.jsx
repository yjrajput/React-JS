import React from 'react'
import UserList from './components/UserList'
import ProductList from './components/ProductList'

const App = () => {
  const userInfo = [
    {
      id: 1,
      email: "user1@gmail.com",
      address: 'NYC',
    },
    {
      id: 2,
      email: "user2@gmail.com",
      address: 'Denmark',
    },
    {
      id: 3,
      email: "user3@gmail.com",
      address: 'Reo',
    },
  ]
  return (
    <div>
      <h1>User information: </h1>
      {
        userInfo.map(({id, email, address}) =>(
          <ul key={id}>
            <li>{email}</li>
            <li>{address}</li>
          </ul>
        ))
      }

      <hr />
      <UserList/>
      <hr />
      <ProductList/>
    </div>
  )
}

export default App
