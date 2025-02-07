// `&&`  - And Operator returns Either Truthy or Falsy Value Actually** 🟢
// like as ->
console.log(2 && 0);    // falsy value - 0
console.log(1 && 2);    // truthy value - 2

// Simply,
// checks If given two values are `true` and returns `true` for the whole expression.
// And if, any-one value is `false` then it returns `false`**
console.log(((2 <= 2) && (3 < 5)));     // true ✅ - as both expressions are correct. i.e, 1st - true as well as 2nd one is true.
console.log(((2 < 2) && (3 < 5)));      // false ❌ - from both expressions the 1st one results to false So, it returns false.
// As both are not true!


// EXAMPLE-1: user-age
let userAge = 25;

//. Age -> 18 - 24!
console.log(((userAge >= 18) && (userAge <= 24)));      // false ❌  - due to second expression <= 24 returns false Thus, remains un-satisfied!!

//. now 18.
userAge = 18;
console.log(((userAge >= 18) && (userAge <= 24)));      // true ✅ - Both expressions >= 18 is true as well as <= 24 also true.
// So it hence, results as true



// `||` - OR Operator. NOTE: Similarly Just like AND Operator it actually gives Truthy or Falsy Value** 🔄
// like as->
console.log(-0 || '');      // falsy value i.e., ''
console.log(2 || 0);        // truthy value i.e., 2
// Simply,
// checks if any one expression is true. And if it is then it returns result as true.
// Whereas if both expressions are false then it returns result as false.

// age - 10
userAge = 14;
console.log(((userAge >= 6) || (userAge <= 18)));       // true ✅ - as both expressions satisfy!


// now 19
userAge = 19;
console.log(((userAge >= 6) || (userAge <= 18)));       // true ✅ - As 1st expression >= 6 gives true, But 2nd expression <= 18 gives false.



// EXAMPLE-2: age
const age = 17;

// Teenager?
const isTeenager = ((age >= 18) && (age <= 26));
// console.log(isTeenager); 

const isAdult = ((age >= 26) && (age <= 100));
// console.log(isAdult);   

const isStudent = (isTeenager || isAdult);
// console.log(isStudent);


// 🔥 Exercise Time 🔥
// LEVEL #1
// Q1. Output of -> '' && 'Hello'
console.log(('' && 'Hello'));   // falsy-value i.e., '' (Falsy ❌)
// Because 1st value - '' is a falsey-value so it skips rest check and returns false or falsy-value!

// Q2. Output of -> 'Hello' || ''
console.log(('Hello' || ''));   // truthy-value i.e., 'Hello' (Truthy ✅)
// Because OR Operator wants only one true value right! So here 1st value - 'Hello' is a truthy-value so it returns truthy-value!

// Q3 Output of -> 'Hello' && undefined
console.log(('Hello' && undefined));   // falsy-value i.e., undefined (Falsy ❌) 
// Because 2nd value - undefined is a falsey-value so it returns false or falsy-value!

// Q4 Output of -> NaN || 3
console.log((NaN || 3));   // truthy-value i.e., 3 (Truthy ✅)
// Because OR Operator wants only one true value right! So here 2nd value - 3 truthy-value so it returns true or truthy-value!


// LEVEL #2.
// Q5. Output of 'Hello' &&  4 + 8
console.log(('Hello' && 4 + 8));    // truthy but, end one i.e., (4 + 8) - 12. (Truthy ✅)
// Here, AND Operator checks one by one 1st one 'Hello' obviously truthy value then, It goes on to next one i.e., (4 + 8) also a truthy-value thus returning a truthy value.

// Q6. Output of 'Hello' ||  4 + 8
console.log(('Hello' || 4 + 8));    // truthy but, 1st one i.e., Hello. (Truthy ✅)
// Here, OR Operator checks one by one 1st one 'Hello' obviously truthy value then it straightaway returns the truthy-value as it only needs one truthy-value.

// Q7. Output of '' || (-4 + 4)
console.log(('' || (-4 + 4)));      // falsy But (-4 + 4 -> 4 - 4) - 0. (Falsy ❌)
// Here, OR Operator checks one by one 1st one '' obviously falsey value then it goes to the next one i.e., (4 - 4) -> 0 also falsey-value so it returns falsey-value as 0.


// LEVEL #3.
// Q8. Output of undefined || (2 + 4 * 2)
console.log((undefined || (2 + 4 * 2)));      // truthy-value 10. (Truthy ✅)
// Here, OR Operator checks one by one 1st one undefined obviously falsey value then it goes to the next one i.e., (2 + 4 * 2 -> 2 + 8) -> 10 is truthy-value so it returns truthy-value as 10.

// Q9.  Output of 'Hello' && console.log('hello') 
console.log(('Hello' && console.log('hello')));      //falsey-value i.e., 'hello'. (Falsy ❌) 
// as console.log('hello') just prints hello but returns `undefined` Thus, type is undefined**
// Here, AND Operator checks one by one 1st one 'Hello' obviously truthy value then, it goes to the next one i.e., console.log('hello')  -> 'hello' But it contains undefined which is falsy-value so it returns 'hello' and undefined.


// Q10.  Output of 'Hello' && console.log('hello') 
console.log(('Hello' || console.log('hello')));      //truthy-value i.e., 'Hello' (Truthy ✅)
// Here, OR Operator checks one by one 1st one 'Hello' obviously truthy value So as it get's 1st value itself true then it smply returns it i.e., Hello.



// ! - NOT Operator ❌ (Negation)
// it opposites the value output which means if value is truthy then it returns falsy and vice~versa....
// Not Operator is works mostly with single values or expressions**
// EX:
console.log(!true);     // false ❌
console.log(!!true);    // true ✅


// It does work with similarly truthy as well as falsy values!
// EX:
console.log(!'');       // true ✅ 
console.log(!!-0);      // false ❌