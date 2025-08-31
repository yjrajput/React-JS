## 📖 About React.js Components  

In React, **components** are the fundamental building blocks of the user interface.  
A component is a **self-contained, reusable piece of UI** that can be combined with other components to build complex applications.  

Each component can contain its own structure (HTML/JSX), styling (CSS), and logic (JavaScript). This makes React applications **modular, maintainable, and scalable**.  

### ✅ Key Points about Components  
- 🧩 **Reusable** – write once, use anywhere  
- 🎨 **Customizable** – controlled with props  
- 🔄 **Dynamic** – can manage their own state  
- ⚡ **Efficient** – React updates only the necessary parts of the UI  

### 🧩 Types of Components  
1. **Functional Components**  
   - Simple JavaScript functions that return JSX  
   - Can use **props** and **React Hooks**  
   ```jsx
   function Welcome(props) {
     return <h1>Hello, {props.name} 👋</h1>;
   }
