// `==` Operator
let user1 = "222";  // gets implicitly converted to `int` behind-the-scenes by JS Engine!
// Also, it possesses a weird behavior as it converts automatically to other type leading to unexpected results
const user2 = 222;
console.log(user1 == user2);    // true - it's logically in-correct as user1 is a "String"


// `===` Operator 
// Unlike above, it checks `type` first.
// // Unlike above, the JS Engine doesn't automatically convert the string to an integer!
console.log(user1 === user2);   // false due to not same-type

// let's change outcome via explicit conversion!
// via parsing or unboxing!
// user1 = +(user1);   // unboxing
// or parseInt(user1)   // parsing
console.log(user1 === user2);   // true


// `!=` Operator.
// opposite to `==` it gives true when values are not-equal to each other & vice-versa
console.log(user1 != user2);    // false


// `!==` Operator.
// Opposite to `===` Operator as it gives true when it's type first get's matched with other one as well as it's value & vice-versa...
console.log(user1 !== user2);


// `>` Operator.
// checks if the one value is larger than the other One.
// If value is of another type than it converts implicity to corresponding type behind-the-scenes by JS-Engine!
const user3 = 225;
console.log(user3 > user1);     // true


// `<` Operator
// Opposite of the '>' Operator, it returns true when one operand is less than the other.
console.log(user1 < user3);     // true


// `<=` Operator
// Same as the `<` operator But, it additionally check the equality to it's other value || operand.
console.log(user3 <= user1);    // false


// `>=` Operator
// Same as `>` operator But, it additionally check the equality to it's other value || operand.
console.log(user3 >= user1);    // true