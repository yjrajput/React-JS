## 🎨 About React.js Styling  

In React, **styling** is used to make components visually appealing and user-friendly.  
Just like regular web development, React supports multiple ways to apply styles, giving developers flexibility to choose based on project needs.  

Styling in React can be applied using:  
1. **Inline Styles** – Apply CSS directly using the `style` attribute as a JavaScript object.  
2. **CSS Stylesheets** – Import regular `.css` files and apply class names.  
3. **CSS Modules** – Scope styles locally to a component, avoiding naming conflicts.  
4. **Styled Components / CSS-in-JS** – Use libraries like `styled-components` or `emotion` for dynamic styling.  
5. **Utility Frameworks** – Use frameworks like **Tailwind CSS** for fast and responsive styling.  

---

### 💡 Example 1: Inline Styling  
```jsx
function InlineStyle() {
  return (
    <h1 style={{ color: "blue", fontSize: "24px" }}>
      Hello, styled with Inline CSS 🎨
    </h1>
  );
}
