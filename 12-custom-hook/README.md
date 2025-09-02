# ⚛️ React Custom Hooks

Custom Hooks in React allow you to **reuse logic across components** by extracting it into a separate function.  
They start with the word **`use`** and can call other React hooks inside them.

---

## 📖 Why Custom Hooks?
- Reuse stateful logic across multiple components.  
- Keep components **clean and readable**.  
- Share logic without duplicating code.  
- Improve maintainability and scalability.  

---

## 📖 Syntax

```jsx
function useCustomHook() {
  // useState, useEffect, or other hooks
  return value;
}
