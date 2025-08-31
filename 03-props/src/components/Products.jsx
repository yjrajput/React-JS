import React from 'react'

const Products = ({name, price}) => {
  return (
    <div>
      <h1>Product name: {name}</h1>
      <h3>Product price: {price}</h3>
    </div>
  )
}

export default Products
