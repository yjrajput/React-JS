import React from 'react'
import './App.css'
const styles = {color: "white", backgroundColor: "crimson", width: "300px", padding: "10px"}
const App = () => {
  return (
    <div>

      {/* inline styling */}
      <h1>Inline styling</h1>
      <h1 style={{backgroundColor: "darkcyan", color:"white", padding: "10px"}}>hello my name is yuvraj singh rathore</h1>
      <button style={{border: "none", padding: "10px 20px", background: "brown", color: "white", borderRadius: "10px"}}>Subscibe</button>
      <hr />

      {/* Internal styling */}
      <h1>Internal styling</h1>
      <p style={styles}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quas, aspernatur atque, ab, amet nam voluptatibus saepe nesciunt assumenda laborum dolorum vel fugiat? Ab, quo aspernatur quia expedita quidem distinctio.</p>
      <hr />

      {/* External styling */}
      <h1 className='external-heading'>External styling</h1>
      <p className='external-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam temporibus ratione asperiores quibusdam, consectetur, qui modi, cum earum minima similique alias ab nobis aliquam laborum! Magnam officiis illum, expedita error ratione totam voluptas. Quo modi similique sint asperiores blanditiis fuga perspiciatis dolore incidunt ut quae non, debitis eos hic provident repellendus quas, voluptatem delectus quaerat reprehenderit consectetur adipisci consequuntur. Rem sint sapiente tenetur voluptas cumque vero architecto ipsum dolorum unde. Voluptatibus pariatur quidem ipsa incidunt corrupti ducimus amet, fugit exercitationem assumenda, nostrum similique quod a modi cupiditate sit? Modi rem beatae nam ex dolorem soluta dolores maiores cupiditate vel laborum!</p>
      <button className='external-btn'>Learn more</button>


    </div>
  )
}

export default App
