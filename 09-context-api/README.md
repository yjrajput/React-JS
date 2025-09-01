# ⚛️ React.js Context API

## 📖 Overview
The **Context API** is a feature in React that provides a way to share data across components **without prop drilling** (manually passing props through every level).  

It is useful for managing **global state** such as themes, authentication, user settings, and language preferences.

---

## 🚀 Why Use Context API?
- Eliminates **prop drilling**  
- Centralized **global state management**  
- Makes data accessible to deeply nested components  
- Cleaner and more maintainable code  

---

## 🛠️ How It Works
1. **Create a Context** → `React.createContext()`  
2. **Provide the Context** → Wrap components with `Context.Provider`  
3. **Consume the Context** → Use `useContext()` hook inside child components  

---

## 📂 Example

```jsx
import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const UserContext = createContext();

// 2. Provide Context
const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Yuvraj");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Consume Context
const Profile = () => {
  const { user } = useContext(UserContext);
  return <h2>Welcome, {user} 👋</h2>;
};

const App = () => (
  <UserProvider>
    <Profile />
  </UserProvider>
);

export default App;
