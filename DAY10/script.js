// 🚀 initialized variables!
// handle user-input
// sanitize the input as needed**
let userName = prompt("Enter Name ? ");
let userAge = parseInt(prompt("Enter Age? "));      // parseInt to convert a String to Integer [number].
// One can also use `+` operator instead But, it's not that efficient as it cannot convert all Strings**
/*
    📌 NOTE: even parseInt(arg) - cannot convert all Strings, such-as parseInt('ssj34jd') gives NaN and even parseInt(null) gives NaN!
    
    EX:
        <= +'34j'
        ➡ NaN ❌
        
        <= parseInt('34j')
        ➡ 34 ✅
*/

// log*
console.log(`NAME: ${userName} & AGE: ${userAge}`);


//  🏠 Homework Assignment: Set default values if the user leaves input empty or fails to provide an input!
if ((userName === "" || userName === " " || userName === null) && (isNaN(userAge))) {

    // add a default value!
    userName = "Guest";
    userAge = 20;
}


// 🎯 IF - An decision making Statement that executes the block according to the satisfied condition!
// EX -
// NOTE: IF Statement considers only single statement in execution when written like this ->
// Also it depends upon the condition given by the dev!
/*
    if (condition)  
    // code to be executed      <-- execution part
    // other code       <-- this part would be ignored by IF statement
*/
if(false) 
console.log(`${userName} is working professional`);
// console.log("Outside IF Statement");    //. this would be executed


//✅ Condition: user is a working **college-student** [Single-line] 
if (userAge >= 18 && userAge <= 24) console.log(`${userName} is a college student`);


// In-order to run multiple code under the IF Statement one can consider using {} block and encapsulate the code to execute...
// Unlike above any code written inside the block - {} of IF Statement would be executed thus, depending upon the given condition

// SYNTAX:
/*
    if (condition) {
        // code     --> this would be executed
        // code     --> this would be executed
    }

*/

// ✅ Condition: If user is a **working professional**
if(userAge >= 25 && userAge <= 40) {
    console.log(`${userName} is a working professional`);
    console.log("And he/she is learning JavaScript");
}


// ✅ Extra condition: If user is a **retired professional**
if(userAge >= 40 && userAge <= 100) {
    console.log(`${userName} is a retired professional`);
    console.log(`And he/she reads newspaper 🗞️`);
}


/*
    ⚠️ Biggest flaw [drawback] of above IF(s) Statement ⚠️  is that even if we give an appropriate input!

    🔹 JS Engine checks each and every IF Statment whether it fits the condition or not!

    EX: if user input's age as 19

    🔹 Here 1st IF condition itself satisfies the conditon (age) Right! 
    🔹 So logically program should get halted or terminated after this IF Statement!

    🔹But, still JS Engine checks all other remaining conditions or the code! 
    As even it doesn't print other IF(s) Statement code "But, still it makes tasks time-consuming and less-efficient!" 🐢
*/