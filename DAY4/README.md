#### DAY4 - Code Execution in JavaScript

This folder explores how JavaScript executes code step by step, covering concepts like debugging and the two phases of code execution. It includes practical examples to enhance understanding.

## Files in this Folder

1. **`index.html`**

   - A simple HTML file showcasing how to link JavaScript for debugging and execution demonstrations.
   - Explains the use of browser developer tools for debugging.

2. **`script.js`**
   - Contains JavaScript code to illustrate:
     - Debugging techniques using `debugger` keyword and browser dev tools.
     - The two phases of JavaScript code execution: **Memory Creation** and **Code Execution**.

---

## Key Concepts Covered

### 1. Debugging in JavaScript

- **Two ways to debug:**
  1. Use the `debugger` keyword in the code before the line to debug.
  2. Use the **Sources Tab** in browser developer tools to add breakpoints.

### 2. JavaScript Code Execution

JavaScript processes code in **two phases**:

1. **Memory Creation Phase**:

   - Memory is allocated to variables with the value `undefined` initially.
   - Example:
     ```javascript
     var firstName = undefined; // Type: undefined
     ```

2. **Code Execution Phase**:
   - The actual values are assigned to the variables, replacing `undefined`.
   - Example:
     ```javascript
     var firstName = "Will"; // Type: string
     ```

---

## Example Code Snippets

### Debugging Example:

```javascript
debugger; // Pause execution here
console.log(firstName);
```

### Summary

```javascript
// Memory Creation
var age = undefined;

// Code Execution
age = 12; // Now 'age' is a number
console.log(age); // Output: 12
```
