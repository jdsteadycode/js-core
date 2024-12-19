#### VARIABLES IN JAVASCRIPT

Here you will get to know the fundamentals of JavaScript variables and their key concepts.

- declaration
- scoping
- types.

### KEY CONCEPTS COVERED

## 1. Variables in JavaScript

- Definition: Variables are containers that hold values in memory.
- Examples: Storing values like a name, age, or marital status.
- Example:

```
let fullName = "Joseph Ono";  // String
let age = 21;                 // Number
let isMarried = false;        // Boolean

```

## 2. Variables Types

- String: A sequence of characters.
- Number: Represents numeric values.
- Boolean: Represents `true` or `false` values.
- Undefined: A variable is declared but not assigned a value.
- Null: A variable is explicitly assigned a `null` value.
- Example:

```
let a = undefined;  // Undefined
let b = null;       // Null
console.log(typeof(a));  // Output: undefined
console.log(typeof(b));  // Output: object

```

## 3. Ways to Create Variables

- `let`: The most commonly used keyword. It is block-scoped, meaning it is only accessible within the block in which it is declared.
- `const`: Used for values that should not change once assigned. It is also block-scoped.
- `var`: The older way of declaring variables. It is function-scoped and allows accessing variables before declaration (with a value of `undefined`).
- Example:

```
let itemName = "Laptops";  // Block-scoped variable
const itemType = "Electronics";  // Constant, cannot be reassigned
var itemBrand = "HP";  // Function-scoped variable

```

### Why Learn JavaScript Variables?

- Fundamental to JavaScript: Variables are crucial for storing and manipulating data in any JavaScript program. They allow you to work with values and build logic around them.
- Understanding Scoping: Knowing how `let`, `const`, and `var` behave in different scopes helps you avoid common errors, especially with variable overwriting and unintentional reassignments.
- Versatile Language: JavaScript is used in both client-side and server-side development. Understanding variables is essential to managing data flow, state, and logic, making it key to becoming proficient in JavaScript.
