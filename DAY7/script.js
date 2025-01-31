// Falsy values
console.log(`These are FALSY values`);
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(``));

// Except above everything is Truthy -
console.log(`Here are some TRUTHY values`);
console.log("false");
console.log(!!true);
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
console.log(Boolean([]));
console.log(!!{});