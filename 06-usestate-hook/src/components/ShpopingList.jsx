import React from 'react'
import { useState } from 'react'

const ShpopingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const newItems = {
            name, quantity: parseInt(quantity)
        }

        setItems([...items, newItems]);
        setName("");
        setQuantity("")
    }
    const handleOnClear = (index) =>{
        setItems(items.filter((_,i) => i !== index))
    }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label >Name: 
            <input type="text" placeholder='Enter product name' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label >Quantity: 
            <input type="text" placeholder='Enter product name' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <button type='submit'>Submit</button>
      </form>

      <ul>
        {
            items.map((items, index) =>(
                <div key={index}>
                    <li>{items.name}  {items.quantity}</li>
                    <button onClick={() => handleOnClear(index)}>X</button>
                </div>
            ))
        }
      </ul>
    </div>
  )
}

export default ShpopingList
