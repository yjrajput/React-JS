# ⚛️ React.js useReducer Hook

## 📖 Overview
The **`useReducer` hook** in React is an alternative to `useState` for managing **complex state logic**.  
It works similarly to a **Redux-like reducer pattern**, where state transitions are handled by a **reducer function** instead of directly updating state.  

---

## 🚀 Why use `useReducer`?
- Best for **complex state logic** involving multiple sub-values  
- Makes state transitions **predictable** and easier to debug  
- Good for situations where the **next state depends on the previous state**  
- Helps organize code better for **scalable applications**  

---

## 🛠️ Syntax
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
