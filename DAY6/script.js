// Some basic operations!
// Exponent-operator - **
// came in `2017 es7+ ECMA UPDATE` as alternative to Math.pow() method
// simplifies the exponention task of numericals**
// Allows to mutltipyling the first numerical to power of second
console.log((3 ** 3));  // 27
console.log(`${(100 * 100 * 100)} by * operator ${(100 ** 3)} by ** operator`);

// Remainder-operator - %
console.log((15 % 2));  // 1
console.log((21 % 2));  // 1


/*
    `Math`: built-in Object that allows to perform wide range of mathematical tasks...

    SYNTAX: Math.property || Math.methodName()
*/
// Some usefull methods
// sqrt() - gives the squareroot of the given input
console.log(`Squareroot of 25: ${Math.sqrt(25)}`);
console.log(`Squareroot of 1000: ${Math.sqrt(1000)}`);


// pow() - provides the output by giving 1st argument the power of 2nd argument.
console.log(`By pow() method of Math Obj: ${Math.pow(2, 4)}`);
console.log(`SAME AS exponent-operator: ${(2 ** 4)}`);


// floor() - wipes out the decimal place and returns number before the given decimal places
// moves backward in direction
// i.e., Math.floor(2.98) -> 2 Math.floor(-2.15) -> -3
// It pushes number to the ground-value**
console.log(Math.floor(9.99));  // 9
console.log(Math.floor(-9.99)); // -10


// ceil() - it works opposite to `floor()` 
// It wipes the decimal places and returns number upcoming to the number
// goes in forward direction
// It pushes number topwards**
console.log(Math.ceil(2.76));   // 3
console.log(Math.ceil(-2.76));  // -2


// round() - It rounds off the given input value closest to it's value
// Does both tasks which `ceil()` and `floor()` does!
console.log(Math.round(3.59));  // 4
console.log(Math.round(3.49));  // 3
console.log(Math.round(-4.59)); // -5
console.log(Math.round(-6.23)); // -6


// random() - it generates a random number between `0` and `1`.
// Not `1` or less than `0`, exactly b|w `0` and `1`!
console.log(`RANDOM NUMBER: ${Math.random()}`);

// So this means the possibility of getting number can be `0` but not less than it! And also it cannot be `1` just close to `1` can say Right?
// Now let's try to show number b|w `0` and `4`
console.log(Math.random() * 4);
// one can use floor() with random() to get more clear result!
console.log(Math.floor(Math.random() * 9));


// Short test
// calculate Area of Rectangle by taking the user-input*
let height = Number.parseInt(prompt("Enter height of the Rectangle? "));
let width = Number.parseInt(prompt("Enter width of the Rectangle? "));

// evaluate area
let areaOfRectangle = (Math.floor(height * width));
console.log(areaOfRectangle);