## 📖 About React.js Lists  

In React, **lists** are used to render multiple elements dynamically from an array of data.  
They make it easy to display collections such as tasks, users, products, or messages in a structured way.  

React uses the **`.map()` function** to iterate over arrays and render list items.  
Each list item should have a **unique `key` prop** to help React efficiently update and manage changes.  

### ✅ Key Points about React Lists  
- 🔁 Render multiple elements dynamically  
- 🔑 Each list item must include a **unique `key`** prop  
- ⚡ Improves performance by allowing React to track changes efficiently  
- 🧩 Commonly used for displaying **tables, menus, todo lists, product lists**, etc.  

### 💡 Example: Rendering a List in React  
```jsx
import React from "react";

function TodoList() {
  const todos = ["Learn React", "Build Components", "Master Lists"];

  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default TodoList;
