## ⚛️ About React.js useState Hook  

The **`useState` hook** is one of the most commonly used hooks in React.  
It allows functional components to have their own **state** (data that can change over time).  

State is useful when you want your component to **re-render** whenever the stored value changes — for example, toggling a modal, updating form inputs, or handling counters.  

---

### ✅ Key Points about `useState`  
- 🗂️ Lets functional components manage state  
- 🔄 Triggers a re-render when state changes  
- 📦 Returns an **array with two values**:  
  1. The **current state value**  
  2. A **function to update the state**  
- 🚀 Can store any data type (string, number, object, array, boolean, etc.)  

---

### 💡 Example 1: Counter with `useState`  
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial state = 0

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment ➕</button>
      <button onClick={() => setCount(count - 1)}>Decrement ➖</button>
    </div>
  );
}

export default Counter;
