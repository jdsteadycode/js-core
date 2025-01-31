#### **Truthy ✅ & Falsy ❎ Values in JavaScript**

This project explains Truthy and Falsy values in JavaScript with examples.

---

## **🔹 Falsy Values**

Falsy values are those that evaluate to false when converted to a Boolean:

- **`false`** – Boolean `false`.
- **`0`, `-0`** – Zero values.
- **`NaN`** – Not a Number.
- **`""`, `''`, ``** – Empty Quotes and Template Strings.
- **`null`** – Null value.
- **`undefined`** - Undefined type.

## **🔹 Truthy Values**

Everything except the falsy values is truthy. Examples:

- **`true`** - Boolean `true`.
- **`{}`** - Empty object.
- **`[]`** - Empty Array.
- **`Infinity`, `-Infinity`** - Infinite values.
- Any non-empty string (**`"0"`, `"false"`**, etc.).
- Any positive or negative number except `0`.

## **🔹 Checking Truthy/Falsy**

Use the `Boolean()` function or `!!` (double negation) to check values:

```javascript
console.log(Boolean("false")); // true
console.log(!!0); // false
console.log(Boolean([])); // true
```

## **📂 Files**

- `index.html` → Displays information about Truthy & Falsy values.
- `script.js` → Contains example code to test values.

🚀 Run it in your browser and check the console!

## License 📜

This project is licensed under the MIT License. Enjoy coding! 🚀
