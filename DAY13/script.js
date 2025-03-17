// 😌 Switch-Case Control Statement-
// basically, when there are multiple conditions the switch-case would be choice!
// As it evaluates the `expression` with each case and returns the matching-case content ✅**
// else it returns `default-case` ☯️!

// Basically, A cleaner approach to handle multiple conditons than whole `if -- else-if -- else` block

/*
    📌 NOTE: useful when there multiple conditons to be checked!
    // Unlike `If-Else` conditionals the `switch-case` use strict-equality aka `===` operator to handle expressions... ♨️
    And if, there multiple same-cases which match then, only the 1st one would be evaluated and executed! 😌
    `break` keyword must be added beneath each code-block of cases as it would immediately prevent execution of other blocks after matching one... 🚫
    Also,
    the `default` block can be placed anywhere inside the switch-case... 🌀

    SYNTAX:
    switch(expression) {
    
        case a:
            // code to executed     <-- execution part
            break;

        case b:
            // code to executed     <-- execution part
            break;

        default:
            // code to executed     <-- execution part
    }


    FOR EX:
    // a dummy data!
    let number = 23;

    switch(number) {

        case 1:
            console.log("one");     // ❌ un-matched
            break;
        
        case 10:
            console.log("ten");     // ❌ un-matched
            break;

        case 15:
            console.log("fifteen");     // ❌ un-matched
            break;

        default:
            console.log(number);    // ✅ default would be executed as none of the above matched!

    }

*/
// debugger     **un-comment this part to see how quickly and how optimized is the switch-case as compared to `if-else if-else` block
// intialized day-number
let dayNo = 3;

// ignore this**
console.log("\n------------------\n");
// handle day(s) using `switch`
switch(dayNo) {

    // **invalid
    default:
        console.log("IN-VALID NO!");
        null;

    // Monday
    case 0:     
        console.log("Monday");
        break;
    
    // Tuesday
    case 1:
        console.log("Tuesday");
        break;

    // Wednesday
    case 2:
        console.log("Wednesday");
        break;

    // Thursday
    case 3:
        console.log("Thursday");
        break;

    // Friday
    case 4:
        console.log("Friday");
        break;

    // Saturday
    case 5:
        console.log("Saturday");
        break;

    // Sunday
    case 6: 
        console.log("Sunday");
        break;
}

// Another EX {converted if-else block --> switch-case}:
let userAge = 20, userName = "Jeet";    // initialized `age` and `name`

// ignore this**
console.log("\n------------------\n");
// handle using `switch-case`
switch (true) {     // because, only the below case(s) would be statisfied if `true`...

    // Condtion: User is kid**
    case (userAge > 0 && userAge <= 4):
        console.log(`${userName} is a kid and he/she is playing.`);
        break;
    
    // Condition: User is school student**
    case (userAge >= 5 && userAge <= 10):
        console.log(`${userName} is a school student and he/she is learning Math, English and Science.`);
        break;

    
    // Condition: User is college student**
    case (userAge >= 18 && userAge <= 24):
        console.log(`${userName} is a college student and he/she is learning Computer Science.`);
        break;

    
    // Condtion: User is working professional**
    case (userAge >= 25 && userAge <= 55):
        console.log(`${userName} is a working professional and he/she is learning JavaScript!`);
        break;

    
    // Condition: User is retired**
    case (userAge >= 56 && userAge <= 120):
        console.log(`${userName} is retired and he/she reads newspaper!`);
        break;

    // When age is -ve or above 120!
    default:
        console.log("Please enter a valid-age");

}


// EX:
let grade = "A";
switch(grade) {

    //. A
    case "A":
        console.log("Student got point b|w 85 to 100");
        break;
    
    //. B
    case "B":
        console.log("Student got point b|w 70 to 84");
        break;
    
    //. C
    case "C":
        console.log("Student got point b|w 50 to 69");
        break;

    //. default
    default:
        console.log("Perform better next-time");
}

// ignore this**
console.log("Execution End! ⚠️");