## 🌀 About React.js Portals  

In React, **Portals** provide a way to render components **outside of their parent DOM hierarchy**.  
Normally, a React component’s children are rendered inside the parent component’s DOM tree. With portals, you can render children into a **different part of the DOM**, while keeping them connected to the React component tree.  

This is especially useful for UI elements like:  
- 🖼️ Modals / Dialogs  
- 📑 Tooltips  
- 📂 Dropdowns  
- 🛑 Alerts / Notifications  

---

### ✅ Key Points about Portals  
- 🔗 Allow rendering of a child component into a **different DOM node**  
- ⚡ Useful when a component should visually "escape" its container  
- 🎯 Still part of the React component hierarchy (state, context, props still work)  
- 🧩 Implemented using `ReactDOM.createPortal`  

---

### 💡 Example: Creating a Modal with Portal  

**index.html**  
```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div> <!-- Portal target -->
</body>
