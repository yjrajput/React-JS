import React from 'react'
import './Recomended.css'
const Recommended = () => {
  return (
    <>
      <section className='recommended'>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recomended-btns'>
            <button className='btns'>All Products</button>
            <button className='btns'>Nike</button>
            <button className='btns'>Adidas</button>
            <button className='btns'>Puma</button>
            <button className='btns'>Vans</button>
        </div>
      </section>
    </>
  )
}

export default Recommended