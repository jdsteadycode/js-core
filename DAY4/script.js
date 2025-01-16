// check phases
// there are two ways to intiate the debugging process ->
// 1. In JS file by adding `debugging` keyword before the line to be checked
// 2. In console or dev tools -> Sources Tab -> add debug [breakpoint]
// console.log(firstName);

// basic code
var firstName = "Will";
let lastName = "Byers";
let age = 12;
const yearOfBirth = 1996;

// person's Introduction.
let personIntro = firstName + " " + lastName + " was born in the Year " + yearOfBirth + " & of Age " + age + " years";
// console.log(personIntro);

// ** how actually JS executes the code!

// It works in two basic steps to execute or process the code.

// PHASE 1: Memory creation
// 1st time the JavaScript checks the type used to create the variable and then,
// -> accordingly it creates a memory space for each variables in-order to be used,
// -> and, it gives the names to each and assigns the given variables (containers or valueHolders) value as `undefined` which is of type `undefined`.

// PHASE 2: Code Execution
// 2nd time after the memory is allocated to each variables.
// -> then, during processing of the code JS replaces `undefined` value and it's type accordingly by finding the corresponding variable.
// -> EX
// Phase 1: age = undefined [type: undefined]
// Phase 2: age = 12 [type: number]

