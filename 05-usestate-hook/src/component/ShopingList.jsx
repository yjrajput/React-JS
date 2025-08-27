import React, { useState } from 'react'

const ShopingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        if(!name || !quantity) return;

        const newItems = {
            name, 
           quantity: parseInt(quantity)
        }

        setItems((items) => ([...items, newItems]) );

        setName("");
        setQuantity("")
        
    }
  return (
    <div>
      <h1>Shoping list</h1>

      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder='Item name' value={name} onChange={e => setName(e.target.value)} />

        <input type="number" value={quantity} placeholder='Quantity' onChange={e => setQuantity(e.target.value)} />

        <button type='submit'>SUbmit</button>
      </form>

      <ul>
        {
            items.map((items, index) => (
                <li key={index}>
                    Name : {items.name} - quantity : {items.quantity}
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default ShopingList
