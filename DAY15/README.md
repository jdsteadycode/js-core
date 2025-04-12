#### **🧠 DAY 15: How JavaScript Stores Values via Address in Memory 🚀**

Following project demonstrates how JavaScript stores variables, not by directly keeping the values inside the variable.
**Rather by `assigning memory addresses` that point to those values. 🧩**

---

## **📌 Contents**

- **Memory Storage Concept** – Understanding how JS Engine handles storage using memory addresses.
- **Primitive vs Non-Primitive** – How strings, numbers, booleans, `null`, and `undefined` are stored internally.
- **DevTools Memory Tab** – Used Chrome DevTools to inspect actual memory usage and how values are retained.
- **Address Sharing** – How JS reuses memory for same-value variables.
- **@Address in Action** – Tracked memory using the `@address` reference in snapshots.
- **Comparing Values** – Why addresses matter especially when comparing objects vs primitive values.

---

## **🛠 Steps to debug 📊**

1. Open your browser and right-click → **Inspect**.
2. Go to the **Memory** tab.
3. Tick ✅ `Include numerical values in snapshot`.
4. Click **"Take Snapshot"**.
5. Search values like `"jeet"` or `23` via **Ctrl+F**.
6. Look for memory address representation: `"jeet" @44553` → means value is stored at that address.
7. Check **Retainers** section to see which variable holds that value.

---

## **💡 How it Works?**

JavaScript stores **values in memory** and locates them via unique addresses:

- `"jeet"` w' `@442879` → stored in **Strings section**
- `23` w' `@49031` → stored in **Numbers section**
- `true`/`false` w' `@73/ @75` → stored in **System section**
- `""` w' `@77`, `undefined` w' `@67`, `null` w' `@71` → stored with **fixed constant addresses**

📌 JS Engine links variables to these addresses — not values directly!

```js
let name1 = "jeet"; // stored at @12391
let name2 = "je" + "et"; // may result in different @ even if same value
```

## **🔄 Optimization via Address Sharing!**

**JS Engine avoids creating multiple memory slots for same primitive values:**

```js
let a = true; // @73
let b = true; // same @73
```

**But not if values are constructed differently like:**

```js
let user1 = "jeet";
let user2 = "je" + "et"; // can have different @address than `user1`
```

## **📸 Preview (Memory Visualization)**

```bash
------------------

"jeet" @442879
23 @1081
true @73
false @75
"" @7
null @11
undefined @13

------------------
```

## **📂 Files**

- `index.html` → introduces `memory-allocation` by JavaScript behind-the-scenes.
- `script.js` → demonstrates how JavaScript allocates memory to each variable.

🚀 Run it in your browser and check the console!

## **📒Summary **

- ✅ even if variables values are same but, can have different @address if they're constructed differently
- ✅ JS Engine stores the `values` ex: `12, "Jeet"` in different sections i.e., `strings, system, numbers`
- 🔴 @address is useful more when it comes to `Non-Primitive` types like `Objects` as there adresses would be compared instead of values.
- 🟡 As in-case of `Primitive` types even if @address is different and values are same the result is `true` when compared via `===`.

## License 📜

This project is licensed under the MIT License. Enjoy coding! 🚀
