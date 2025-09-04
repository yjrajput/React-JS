import React from 'react'
import './Nav.css'
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
const Nav = () => {
  return (
    <nav>
      <div className='nav-container'>
        <input className='search-input' type="text" placeholder='Search your product here'/>
      </div>

      <div className='profile-container'>
          <a href="#"><AiFillHeart className='nav-icons'/></a>
          <a href="#"><AiOutlineUserAdd className='nav-icons'/></a>
          <a href="#"><AiOutlineShoppingCart className='nav-icons'/></a>
      </div>
    </nav>
  )
}

export default Nav