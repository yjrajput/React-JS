## 📖 About React.js Props  

In React, **props (short for properties)** are used to **pass data from one component to another**.  
They make components **dynamic and reusable** by allowing values to be customized when the component is used.  

Props are **read-only**, meaning a component **cannot modify its own props** — they are immutable. Instead, they are controlled by the parent component, which passes them down to child components.  

### ✅ Key Points about Props  
- 📦 Used to pass **data from parent to child** components  
- 🔒 **Immutable** – cannot be changed inside the receiving component  
- 🎛️ Make components **reusable and customizable**  
- ⚡ Allow React apps to be more **dynamic and flexible**  

### 💡 Example: Using Props in React  
```jsx
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}! 👋</h1>;
}

export default Greeting;
