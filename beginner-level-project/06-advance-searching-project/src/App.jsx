import React from 'react'
import Nav from './Navigation/Nav'
import Recommended from './Recommended/Recommended'
import Product from './Products/Product'
import './App.css'
import Sidebar from './Sidebar/Sidebar'
const App = () => {
  return (
    <>
      <Sidebar/>
      <Nav/>
      <Recommended/>
      <Product/>
    </>
  )
}

export default App