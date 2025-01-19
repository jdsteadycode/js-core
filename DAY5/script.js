// String
// A String is anything that goes inside '' (single) || "" (double) Quotations.
// Basically, any textual information enclosed inside or within single or double quotes is considered as a String.
// Also, Strings are indexed: meaning each element or character is assigned or given a unique indice location!
// Which helps to access that specific element or character easily just by index location.

// EX:
const cityName = "Churchgate";

// indexing to access the element at `2nd one`
let secondChar = cityName[1];
// console.log(`Second Character from ${cityName}: ${secondChar}`);

// Also to access `1st char`
let firstChar = cityName[0];
// console.log(`First Character from ${cityName}: ${firstChar}`);


// Properties or Property of A String
// An only property is `length`
// this property can be implemented via conceding with '.' notation!
const cityLength = cityName.length;
// console.log(`Total Number of Elements || Characters of ${cityName}: ${cityLength}`);


// Methods
// The methods are nothing but, built-in special functions of String Class.
// denoted by () `round brackets`
// and conceded just like as property with . `dot notations`

// Two basic category of String Methods
// (1.) Methods without Any Arguments.
// (2.) Methods with Arguments.

// (1.)
// Firstly, let's go through some methods **without Any Argument**
// Such Methods, don't require any input to get some result!
// a.) toUpperCase() - new result in all capitalized char(s)
const cityInUpCase = cityName.toUpperCase();
// console.log(`CITY: ${cityInUpCase}`);

// b.) toLowerCase() - new result in all small-case char(s)
const cityInLowCase = cityName.toLowerCase();
// console.log(`CITY: ${cityInLowCase}`);

// c.) trim() - new result where start `n` end whitespaces are eliminated
// Not, the intermediate ones***
const improperText = "    Hey, What's UP!        ";
const properText = improperText.trim();
// console.log(`Better Text: ${properText}`);

// d.) trimStart() - same as trim But, only starting whitespaces are removed.
const trimmedAtStart = improperText.trimStart();
// console.log(`Removed Starting Whitespaces: ${trimmedAtStart}`);

// e.) trimEnd() - same as trim But, only ending whitespaces are removed.
const trimmedAtEnd = improperText.trimEnd();
// console.log(`Removed Ending Whitespaces: ${trimmedAtEnd}`);


// (2.)
// Now, let's look at some of the useful and important methods().
// Who need some input as arguments to provide appropriate result!


// a.) includes() - returns boolean value which either ensures that given character/ string/ portion exists in the String or not!
// If exists -> true
// Else -> false
const isPresent = cityName.includes("u");
// console.log(`IS 'u' there in ${cityName}: ${isPresent}`);


// b.) indexOf() - returns an index/ position/ location of character that matches corresponding input given by the user.
// If char doesn't match then, it returns `-1`.
// const gate = cityName.indexOf("gatex");   -> give -1 as it doesn't exist!
const gate = cityName.indexOf("gate");
// console.log(`gate from ${cityName} is present at ${gate}`);


// c.) replace() - it replaces the specified portion of string by the user with another one as given by the user!
// It replaces a single portion/ char the matches first occurence*
const newCityName = cityName.replace("h", "w");     // replaces only first 'h' -> 'w'
// console.log(`New City: ${newCityName}`);


// d.) replaceAll() - similar to replace() But, it changes all the chars matching the given string portion by the user!
const updatedCityName = cityName.replaceAll("h", "w");   // changes all h -> w
// console.log(`Changed all 'h' to 'w': ${updatedCityName}`);


// e.) concat() - it allows to join/ merge one or multiple strings sperated by delimiter `,`.
const anotherCityName = "Jogeshwari";
const nextCityName = "Ville Parle";

const stateInfo = cityName.concat(', ', anotherCityName, ', ', nextCityName);
// console.log(`Cities under Mumbai, Maharashtra are: ${stateInfo}`);


// f.) padStart() - usefull method which allows to mask String by hiding certain characters.
// It hides the characters/ elements from starting
const accountNo = "1001110001112567";
const acNoLength = accountNo.length;
const lastFourDigits = accountNo.substring(12);

const maskedAcNo = lastFourDigits.padStart(12, "#");
// console.log(`Money was credited to your A/C ${maskedAcNo}`);


// g.) padEnd() - usefull method which allows to mask String by hiding certain characters.
// It hides the characters/ elements from End
const reMaskedAcNo = lastFourDigits.padEnd(12, "#");
// console.log(`Money was credited to your A/C ${reMaskedAcNo}`);


// h.) charAt() - gives character by mentioned index location by the user
const fetchLetterL = nextCityName.charAt(2);
// console.log(fetchLetterL);


// i.) at() - latest But, similar to charAt().
// at() was added from 2022 update from ECMA International i.e., ES2022 feature
// Only difference is it allows to use -ve indexing whereas, charAt() doesn't
const lastLetter = nextCityName.at(-1);
// console.log(lastLetter);


// j.) charCodeAt() - returns ASCII code representing the given char matching specified index-location as given by the user.
// And, if input isn't given then it by-default picks `0` index-position
// i.e.,
// const fetchASCIICodeOfV = nextCityName.charCodeAt();
// console.log(`ASCII CODE OF V: ${fetchASCIICodeOfV}`);

const fetchASCIICode = nextCityName.charCodeAt(2);
// console.log(`ASCII CODE OF l: ${fetchASCIICode}`);


// k.) split() - it returns an array of single element or multiple elements depending upon user-input
const states = stateInfo.split();
// console.log(`States: ${states}`);


// l.) substring - allows to extract specific portions from given string
// It takes staring postion, and ending postion
// Note: if -ve indice is provided then, it won't work and will treated as zero
// const partOfState = stateInfo.substring(-4, 22);    // -ve index `X` work!
const partOfState = stateInfo.substring(12, 22);
// console.log(`Part of State: ${partOfState}`);


// m.) slice - it is similar to substring, But it works also with -ve indexes
const portionOfState = stateInfo.slice(-5);
// console.log(`Portion of State: ${portionOfState}`);