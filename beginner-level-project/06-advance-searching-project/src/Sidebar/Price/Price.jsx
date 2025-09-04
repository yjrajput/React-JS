import React from 'react'
import './Price.css'
const Price = () => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title  price-title'>Price</h2>

      <label className='sidebar-lable-container'>
        <input type="radio" name='text2'/>
        <span className='checkmarks'></span>All
      </label>
      <label className='sidebar-lable-container'>
        <input type="radio" name='text2'/>
        <span className='checkmarks'></span>$0-$50
      </label>
      <label className='sidebar-lable-container'>
        <input type="radio" name='text2'/>
        <span className='checkmarks'></span>$50-$100
      </label>
      <label className='sidebar-lable-container'>
        <input type="radio" name='text2'/>
        <span className='checkmarks'></span>$100-$150
      </label>
      <label className='sidebar-lable-container'>
        <input type="radio" name='text2'/>
        <span className='checkmarks'></span>$150-$200
      </label>
    </div>
  )
}

export default Price