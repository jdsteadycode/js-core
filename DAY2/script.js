// Datatypes in JS
// two mainly there in JS
// 1. Primitive Data-types
// 2. Non-Primitive Data-types


// null
let age = null;
console.log(typeof age);    //. to check it's type just use `typeof` operator
console.log(age);   //. it gives `null`

// instead use this below **
console.log(age === null);  // if `true` then it's null

//. number
let qty = 100.34;
console.log(typeof qty);    //. returns number
console.log(qty);
qty = -50;
console.log(typeof qty);    //. It too returns number
console.log(qty);


//. string
let brand = "Pappa John";   //. via double quotes
brand = 'pappa don';    //. via single quotes ''
 //. also written via backticks -> ``. It can be used to write multi-line string.
//. aka Template-literals 
brand = `
    Pappa John is dancer.
`;     
console.log(typeof brand);  //. returns string
console.log(brand);


//. boolean
let isSuccessfull = true;
console.log(typeof isSuccessfull);  //. returns boolean
console.log(isSuccessfull);


//. undefined
let startedAt;
console.log(typeof startedAt);  //. returns undefined
console.log(startedAt);     //. undefined

// bigInt
let bgnt = BigInt(213131313131313131313131313);
// or bgnt = 213131313131313131313131313n.
//. Here `n` specifies the number is a bigInt
console.log(typeof bgnt);


//. symbol
let sbl = Symbol("A");
console.log(typeof sbl);


//. type conversion
// 1.) String -> Number
console.log("TYPE CONVERSION");
let val = '5';
console.log(typeof +val);   //. number

val = 'anay';
console.log(+val);   //. NaN
console.log(typeof +val);   //. Also an number but, not a valid number

// 2.) Number -> String
val = 55 + '';
console.log(typeof val);   //. string

// 3.) Boolean -> Number
//. i.e., in programming 0 means `false` and 1 means `true`
val = +false;
console.log(typeof val);    //. number
val = +true;
console.log(typeof val);    //. number