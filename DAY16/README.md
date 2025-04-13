#### **📗 DAY 16: Objects in JavaScript**

This project demonstrates how JavaScript creates and handles objects behind the scenes.

---

## **📌 Contents**

- **Non-Primitive** – Objects as the only non-primitive `reference` type in JavaScript.
- **Storage** – How `object` is stored behind the scenes i.e., `memory`.
- **DevTools Memory Tab** – Used Chrome DevTools to inspect actual memory usage and how values are retained.
- **@Address in Action** – How JS Engine stores and links `nested objects` inside `objects` using `@address` assigned.
- **Comparing Address** – How JS Engine just compares @addresses of different Objects even if their content is similar i.e., instead of their content.

---

## **🛠 Steps to debug 📊**

1. Open your browser and right-click → **Inspect**.
2. Go to the **Memory** tab.
3. Tick ✅ `Include numerical values in snapshot`.
4. Click **"Take Snapshot"**.
5. Search values like `"Elijah"` or `23` via **Ctrl+F**.
6. Look for memory address representation: `"Elijah" @44553` → means value is stored at that address.
7. Check **Retainers** section to see which variable holds that value.

---

## **💡 How it Works?**

JavaScript stores **objects in memory** and locates them via unique addresses within other Object aka `nesting`:

- `userDetails{}` w' `@442879` → stored in **Objects section**
  - `address{}` w' `@49031` → stored in **Objects section**
  - `moreInfo{}` w' `@48991` → stored in **Objects section**

📌 JS Engine links variables to these addresses — not values directly!

```js
const userDetails = {
  name: "Elijah Mikaelson",
  userName: "@original",
  age: 24,
}; //. address would be like: @146773
const userDetails2 = {
  name: "Elijah Mikaelson",
  userName: "@original",
  age: 24,
}; //. @146779
```

## **📸 Preview (Memory Visualization)**

```bash
------------------

🔽 userDetails @442879
    🔽 address @49031
        🔽 moreInfo @48991

------------------
```

## **📂 Files**

- `index.html` → introduces `objects` in JavaScript and behind-the-scenes.
- `script.js` → demonstrates how JavaScript handles `objects`.

🚀 Run it in your browser and check the console!

## **📒 Summary**

- ✔️ An actual Object may contain thousands of atributes/ properties and JS Engine cannot compare each Object with another's (value)
  which can impact it's performance Right? i.e., much in-efficient.
- ✔️ Additionally, the Objects might contain same attribute (key) But, values (data) may be varied (different) Thus making direct comparision can be problematic and un-reliable
- ✅ Whenever an Object is made via `{}` symbol.. JS Engine creates a new each in the memory..
- ✅ places each object inside `Object` memory section...

## License 📜

This project is licensed under the MIT License. Enjoy coding! 🚀
