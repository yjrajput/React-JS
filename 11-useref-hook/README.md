# 📌 React `useRef` Hook

The **`useRef`** hook in React is used to create a **mutable reference object** that persists across re-renders. Unlike `useState`, updating a ref **does not trigger a re-render**.

It is mainly used for:
- Accessing and manipulating **DOM elements** directly.
- Storing **mutable values** (like timers, previous values, etc.).
- Avoiding re-renders when you only need to update a reference.

---

## 📖 Syntax

```jsx
const refContainer = useRef(initialValue);
