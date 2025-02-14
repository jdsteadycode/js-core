#### **🔥 DAY 12: Learning Nested If-Else Statements in JavaScript 🎯 🎯**

This project takes decision-making to the next level by implementing nested if-else statements in JavaScript. 🚀

---

## 📌 Contents

- **Nested If-Else Blocks** – Placing `if-else` inside another `if-else`.
- **Parent-Child Condition Execution** – Nested blocks execute only if their parent condition is `true`.
- **Logical Flow Optimization** – JS stops checking once a condition matches!
- **Truthy & Falsy Values** – How `if-else` works beyond just `true/false`.
- **Debugging Execution** – Used `debugger` keyword or Developer Tools (`Sources`) Tab for execution flow.

## 🚀 How to Run

1. **Open** `index.html` in a web browser. 🌍
2. **Open the Console** (`F12` → `Console` in Chrome) to see results from `script.js`. 🖥️

## ⚡ How it Works?

**1️⃣** User is asked to enter a name & age.  
**2️⃣** JavaScript validates and assigns default values if input is missing.  
**3️⃣** The `if-else if-else` block categorizes users based on age, but with nested conditions:

- `0-4` → Kid playing 🎈
- `5-17` → School student learning 📚
- `18-24` → College student (Computer Science) 💻

  - _Extra check_: If `age === 20`, a message appears!
  - _Extra check_: If the `name` has more than `5` characters, a message appears.

- `25-55` → Working professional (JavaScript learner) 🔥
- `56-120` → Retired person reading newspaper 📰
- `< 0 or > 120` → Invalid age warning ⚠

## 🚀 Performance Advantage

Unlike multiple independent `if` statements, `if-else if-else` works as a single execution block. Here,

- ✅ JS stops checking conditions once a match is found, making it faster!
- ✅ Conditions inside an `if` block run **only if** the parent block is `true`.
- ✅ More structured and readable decision-making logic.
- ✅ Works with Truthy & Falsy values, not just `true` or `false`.

## 🛠 Debugging / Execution Guide

- Use `debugger` keyword to pause script execution.
- Open Developer Tools (`F12` → Sources Tab) to analyze code execution step-by-step.

## 📸 Preview (Output)

```bash
Enter Name? Rohan
Enter Age? 20
NAME: Rohan & AGE: 20
Rohan is a college student and he is learning Computer Science.
He is 20 years old.
Rohan has 5 or fewer characters in his name.
```

## **📂 Files**

- `index.html` → Introduces **nested** `if-else` statements.
- `script.js` → Contains optimized decision-making code with nested conditions.

🚀 Run it in your browser and check the console!

## License 📜

This project is licensed under the MIT License. Enjoy coding! 🚀
