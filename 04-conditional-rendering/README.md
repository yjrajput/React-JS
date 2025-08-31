## 📖 About React.js Conditional Rendering  

In React, **conditional rendering** means displaying different UI elements depending on certain conditions.  
It works just like JavaScript conditions (`if`, `else`, `switch`, ternary operators), but instead of controlling program logic, it controls **what gets displayed in the UI**.  

Conditional rendering makes React applications **dynamic and interactive**, allowing components to change based on state, props, or user actions.  

---

### ✅ Key Points about Conditional Rendering  
- ⚡ Renders UI dynamically based on conditions  
- 🧩 Commonly used with **state** and **props**  
- 🔄 Makes apps more **interactive and user-friendly**  
- 🔑 Uses standard JavaScript operators (`if`, `&&`, `?:`) inside JSX  

---

### 💡 Example 1: Using `if` Statement  
```jsx
import React from "react";

function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back, User! 👋</h1>;
  }
  return <h1>Please log in.</h1>;
}

export default UserGreeting;
