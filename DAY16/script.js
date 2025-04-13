/*
    Objects in JavaScript 🔷 
    - aka REFERENCE TYPE
    - can be created just like any other data-type in JavaScript data-type
    - they are only one who are considered as Non-Primitive Data-Type...
    - have ability to hold multiple types of data underneath them even sub-objects i.e., nested-objects...
    - by-default internally keys of Objects are quoted by JS Engine behind-the-scenes 
    - mutable in-case of values But, not as per their reference...

    *SYNTAX*
    let/ const <objectName> = {
        key: value,
        keyN: valueN
    }

    *EX*
    const movieCard = {
        "title": "Smile II",
        "genre": ["Thriller", "Horror"],
        "releaseDate": "2024-10-18"
        "rottenTomatoes": 80
    }

    🟢 What happens here is JS ENGINE creates this Object in memory assigning it an @address to Object itself as well @addresses to it's attributes like `title` etc...

    🔴 But, If Another Object is created with same data or attributes then, JS ENGINE allotes separate addresses to itself and to it's attributes as well!

    ❕ IF one checks if both are equal or not i.e., movieCard === movieCard2 (for ex)
    This results to `false`...
    As they're addresses are different as JS Engine provides different addresses to each by-default*

    *REASON*
    ✔️ An actual Object may contain 1000 atributes and JS Engine cannot compare each Object with another's (value)
    which can impact it's performance Right?
    ✔️ Additionally, the Objects might contain same attribute (key) But, values (data) may be varied (different)

    *CONCLUSION*
    ✅ Whenever an Object is made via `{}` symbol.. JS Engine creates a new each in the memory..
    ✅ places each object inside `Object` section...
*/


// EXAMPLE 1: 📌
const userDetails = {       //. address would be like: @146773
    "name": "Elijah Mikaelson",
    "userName": "@original",
    "age": 24,
}

const userDetails2 = {      //. @146779
    "name": "Elijah Mikaelson",
    "userName": "@original",
    "age": 24,
}


// EXAMPLE 2: 📌
/*
    Even if objects are empty? still JS Engine provides them a unique (different) address each time**
    Unlike primitive-types... where if data (value) is same then no different @address is alloted to save-space by JS Engine!
*/
// initial data [to make address search easy**]
let name = "Kalp";      //. @165965
let name2 = "Kalp";     //. @165965
// console.log(name === name2)      //. -> true ✅
/* As values are being compared */

// some empty Objects?'
const myObject1 = {}        //. @185677
const myObject2 = {}        //. @185679
// console.log(myObject1 === myObject2)     //. -> false ❌
// Even myObject1 == myObject2  results to false ❌
/* As @addresses are being compared */

// some empy strings?
let myString1 = "";     //. @77
let myString2 = "";     //. @77


/*
    ACCESSING OBJECT's values?
    - done by two-ways..
    1️⃣ `.` Notation (common approach to implement)
    2️⃣ `[]` Notation - useful when writing keys with kebab-case (EX: word-word)

    NOTE: If attribute/ value doesn't exist and trying to access then JS Engine gives `undefined` like any other varible decalred...
*/

// EXAMPLE 3: 📌
// console.log(`USER DETAILS:\nNAME: ${userDetails.name}\nAGE: ${userDetails.age}\nALSO WORKS: ${userDetails["user" + "Name"]}`);



/*
    ADDING DATA INTO OBJECTS
    - also possible via above ways i.e.,
    1️⃣ `.` Notation                  2️⃣ `[]` Notation
    
    ALSO UPDATION IS POSSIBLE similarly**
*/
// EXAMPLE 3: 📌
userDetails.isHuman = false;    //. new data
console.log(userDetails);       //. check-log**
userDetails.isHuman = true;     //. updated `isHuman`
console.log(userDetails);       //. check-log**


/*
    *STORING MULTIPLE DATA IN OBJECTS*
    ⚠️ what happens here is JS ENGINE creates nested objects separately and just gives reference by giving their @address to the attribute (key)!

    // EX:
    1️⃣ userDetails3{} - new Object & @address i.e., @123457
    2️⃣ userDetails.address{} - new Object & @address i.e., @345667
    3️⃣ userDetails.address.moreInfo{} - new Object & @address i.e., @341899

    🔹 JS Engine links whole Object's attributes via @addresses internally! simply
*/
// EXAMPLE 4: 📌
const userDetails3 = {
    "name": "Kush",
    "age": 21,
    "address": {    //. address as Object!
        "state": "Gujarat",
        "city": "Vapi",
        "town": "vapi-town",
        "moreInfo": {       //. Object - moreInfo nested inside -> address Object...
            "pincode": "396191",
            "taluka": "pardi"
        }
    }
}
// log** check
console.log(userDetails3.address);      //. gives another nested Object
// log** check
console.log(`LIVES IN\nSTATE: ${userDetails3.address.state}\nCITY: ${userDetails3.address.city}\nTOWN: ${userDetails3.address.town}\n\nMORE DETAILS\nPINCODE: ${userDetails3.address.moreInfo.pincode}\nTALUKA: ${userDetails3.address.moreInfo.taluka}`);       // can be accessed by `.` or `[]`..