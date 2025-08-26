import React from 'react'
import UserList from './components/UserList';
import ProductList from './components/ProductList';

const App = () => {
  // const numbers = [1,2,3,4,5];
  // const userInfo = [
  //   {
  //     id: 1,
  //     name: "yuvraj",
  //     email: "yuvraj@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "sager",
  //     email: "sagar@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     name: "rajat",
  //     email: "rajat@gmail.com",
  //   },
  // ]
  return (
    <div>
      {/* <ul>
        {numbers.map((items) => (
          <li key={Math.random()}>{items}</li>
        ))}
      </ul>

      {
        userInfo.map(({name, email,id}) => (
          <div key={id}>
            <h1>Name : {name}</h1>
            <p>Email : {email}</p>
          </div>
        ))
      } */}

      <UserList/>
      <hr />
      <ProductList/>
    </div>
  )
}

export default App
