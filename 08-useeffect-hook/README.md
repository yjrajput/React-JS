## ⚛️ About React.js useEffect Hook  

The **`useEffect` hook** is one of the most powerful and commonly used hooks in React.  
It lets you **perform side effects** in functional components, such as:  

- 📡 Fetching data from an API  
- ⏳ Setting up timers or intervals  
- 🎨 Updating the DOM manually  
- 🧹 Cleaning up resources (like event listeners)  

In class components, this functionality was achieved using **lifecycle methods** (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`). With `useEffect`, you can handle all of these in **functional components**.  

---

### ✅ Key Points about `useEffect`  
- 🗂️ Runs **after every render** by default  
- 🎯 Can be controlled with a **dependency array** (`[]`)  
- 🧹 Can return a **cleanup function** to remove side effects  
- 🔄 Replaces lifecycle methods from class components  

---

### 💡 Example 1: Basic useEffect  
```jsx
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or updated ✅");
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment ➕</button>
    </div>
  );
}
