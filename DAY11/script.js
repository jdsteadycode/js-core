// 🎯 ELSE IF, ELSE - An decision making Statement that executes the block according to the un-satisfied pre-conditions!
// Also it depends upon the condition given by the dev!
// And, there can be multiple ELSE-IF(s) blocks as per requirements of the developer. ✅

  
/*
    📌 NOTE: Unlike IF Statement here, An `IF-ELSE IF-ELSE` is considered as a "single conditional block of execution" -> 🥸
        &, One cannot start writing code directly using ELSE-IF Statement, As JS Engine will throw an Error. ❌
        
        SYNTAX:
        if (condition) { 
            // code to be executed      <-- execution part
        }
        else if (condtion) {
            // code to executed     <-- execution part
        }
        else if (condtion) {
            // code to executed     <-- execution part
        }
        else {
            // default block to be executed     <-- execution part
        }
        // other code       <-- this part would be ignored by `IF-ELSE IF-ELSE` statement block {}


        EX:

        // a dummy data!
        let number = 23;

        if(number < 5) {
            console.log(`${number} is less than 5!`);
        }

        else if(number < 10 && number > 6) {
            console.log(`${number} is less than 10 But, greater than 6!`);
        }

        else if(number < 20 && number > 11) {
            console.log(`${number} is less than 20 But, greater than 11!`);
        }

        else {
            console.log(`${number} quite bigger.`);
        }
*/

// Code - slightly modified from `DAY10` repository.
// handle user-input
// sanitize the input as needed**
// i.e, default-value and type-conversion (int)
let userName = prompt("Your Name please ? [EX: Joe Blake] ");
let userAge = parseInt(prompt("Your Age please ? [EX: 23] "));

// sanitize the input as needed**
if ((!userName) && (isNaN(userAge))) {

    // add a default value!
    userName = "Guest";
    userAge = 20;
}

// log** [test]
console.log(userName, userAge);

// Condtion: User is kid**
if (userAge <= 4 && userAge >= 0) {
    console.log(`${userName} is a kid and he/she is playing.`);
}

// Condition: User is school student**
else if(userAge <= 17 && userAge >= 5) {
    console.log(`${userName} is a school student and he/she is learning Math, English and Science.`);
}

// Condition: User is college student**
else if(userAge <= 24 && userAge >= 18) {
    console.log(`${userName} is a college student and he/she is learning Computer Science.`);
}

// Condtion: User is working professional**
else if(userAge <= 55 && userAge >= 25) {
    console.log(`${userName} is a working professional and he/she is learning JavaScript!`);
}

// Condition: User is retired**
else if(userAge <= 120 && userAge >= 56) {
    console.log(`${userName} is retired and he/she reads newspaper!`);
}

// When age is -ve or above 120!
else{
    console.log("Please enter a valid-age");
}


/*
    🟢 As we have seen IF-ELSE IF-ELSE block were working woith true & false values. 🟢

    Not only this, But it can also work with TRUTHY ✅ & FALSY ❌ values just like we did in `logical operators`!
*/

// EX:
if(-0) {
    console.log("Oh, 0 is a falsy value");      //. ❌ no log in console as -0 is falsy
}else {
    console.log("Yes -0 is a falsy value!");    //. ✅ log as `if` is not satisfied
}

/*
   🟣 Here, above Starting from Conditon `kid` ---> `working-professional` is considered as a single Conditional Block Of Execution when 
   if - else if - else is used! 🟣

    🔹 So, JS Engine doesn't check each and every IF-Else-IF-Else Statment(s)!

    EX: if user input's age as 3

    🔹 Here 1st IF condition itself satisfies the conditon (age) Right! 
    🔹 So JS Engine quickly executes the only satisfied code.
    🔹 Instead of checking other else-if, else blocks it ends/ terminates the program instantly/ quickly!

    🔹 IF any IF-ELSE IF block doesn't satisfy the given input then, JS Engine just executes the else block without taking much time.
    
    🔹To see this live one can do the following steps -
        1. One can see by adding `debugger` above any IF Statement given in the code! 
        2. then open `developer tools` by right clicking and selecting the inspect button
        3. After then go to `sources` tab then click on `forward-step` button to see the script execution...
    
    As Here it doesn't print other ELSE-IF(s) or ELSE Statement(s) code "Thus, taking less-time and faster as well as more-efficient!" 🐵
*/
