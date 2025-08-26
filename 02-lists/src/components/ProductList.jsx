import React from 'react'

const ProductList = () => {
    const products = [
        {id: 1, name : "phone", price: "$600"},
        {id: 2, name : "laptop", price: "$1500"},
        {id: 3, name : "headphone", price: "$200"},
    ]
  return (
    <div>
      {
        products.map(({id,name,price}) => (
            <div key={id}>
                <h1>Name : {name}</h1>
                <h3>Price: {price}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default ProductList
