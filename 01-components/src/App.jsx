import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import DynamicContent from './components/DynamicContent'


const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <hr />

      <h1>Dynamic content randering</h1>
      <DynamicContent/>
    </>
  )
}

export default App
