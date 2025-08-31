import React from 'react'

const ProductList = () => {
    const products = [
        {id: 1, name: 'Laptop', price: 1500},
        {id: 2, name: 'Headphone', price : 200},
        {id: 3, name: 'Computer', price: 15000}
    ]
  return (
    <div>
      {
        products.map(({id,name,price}) =>(
            <ul key={id}>
                <li>{name}</li>
                <li>{price}</li>
            </ul>
        ))
      }
    </div>
  )
}

export default ProductList
