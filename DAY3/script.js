// basics of variables
// -> variables: containers who hold values in memory
// ex variable storing name
let fullName = "Joesph Ono";

// some popular ex's
let userName = "@joseph4u";     //. userName is showcased in camelCase!
let age = 21;
let isMarried = false;

// can handle multiple values to new variable
let userIntro = "Hey! myself " + fullName + " and I'm " + age + ". But, still " + (isMarried ? "married" : "un-married");

// un-defined and null!
let a = undefined;
let b = null;
console.log(typeof(a));
console.log(typeof(b));

// one can also change the value by re-assigning it!
a = "George";

// ways to create variables
// let || const || var
// let - most popular choice, cannot be accessed before it's declaration (As, it would give not-initialized error),  allows re-decalration, decalrations, block-scoped...
// const - most-reliable choice, must be declared otherwise (error-not initialized but, internally assigns undefined but, needs to be strictly declared!), also block-scoped!
// var - old way to create variable, same as let but can be accessed before it's decalaration (but! it will give un-defined with still accessible) ,function-scoped


//    ---- let v|s var ----

        console.log(a);
        console.log(x); 
    {
        let x = 100;
        var a = 200;
    }
        console.log(x);
        console.log(a);

        
// via let and const
let itemName = "Laptops";
let itemBrand = "HP";
const itemType = "Electronics";