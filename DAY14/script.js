// log** check ignore-this!
console.log("loaded ✅");


/*
    Ternary Operator:- ❔❕
    - denoted by ? :
    - used for evaluating the conditions/ expressions given by the user!

    *SYNTAX*
    //.     part-(1)          part-(2)   part-(3)
    (expression/ condition) ? <code 1> : <code 2>

    *WHY TO USE?*
    So it's quite similar to IF-ELSE conditional statements but,
    - more compact
    - optimized 
    - saves certain lines of code!

    *WORK?*
    1. If given expression is `true` or `Truthy Value`
    2. Then, section `?` block would be executed instantly
    3. Else, it goes to `:` and executes default code...


    *EX*
    !true ? "OOP's I'M FALSE." : "NO, I'M TRUE"
*/

// EXAMPLE CASE 1: 📌
console.log("true" ? -0 : 0);   //. JS Engine would print `-0` as condition is already a `Truthy Value`

debugger
// EXAMPLE CASE 2: 📌
let user = prompt("Enter user-name ? ");
let gender = prompt("Enter gender? ");
let role = prompt("Enter Role ? ") || "staff";

// check role & gender
if (!["admin", "staff"].includes(role.toLowerCase())) {
    //. ask again?
    role = prompt("Enter Role [admin/ staff] ? ");
}
if (!["male", "female"].includes(gender.toLowerCase())) {
    // ask again?
    gender = prompt("Enter Gender [male/ female] ? ");
}


// show screen based on role**
const view = role === "admin" ? `${user} ${gender === "male" ? "🧑🏻‍💼" : "👩🏻‍💼"}, you're logged-in as ${role}` : `${user}, you're logged-in as ${role}`;
console.log(view);