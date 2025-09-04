import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import Category from './Category/Category'
import Price from './Price/Price'
import Color from './Color/Color'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <>
       <section className='sidebar'>
            <div className="logo-container">
                <h1 className='sidebar-title'><MdOutlineShoppingCart/></h1>
            </div>

            <Category/>
            <Price/>
            <Color/>
       </section>
    </>
  )
}

export default Sidebar