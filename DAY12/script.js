// 🎯 Nested IF-Else conditonal blocks -
// Allows to place multiple IF-ELSE blocks inside other IF-ELSE blocks.
  
/*
    📌 NOTE: Here the "nested If-Else block" would be executed on if it's parent block is satisfied by the given condition
          
        SYNTAX:
        if (condition) { 
            // code to be executed      <-- execution part
        }
        else if (condtion) {
            // code to executed     <-- execution part

            // nested-block [executed only if it's parent is true ✅]
            if(condtion) {      
                // code to be executed      <-- execution part
            } else {
                // code to be executed      <-- execution part
            }
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

            // extra-condition
            if(number >= 7) {
                console.log(`${number} is 7 or greater!`);
            } else {
                console.log(`${number} is 6 or less`);
            }
        }

        else if(number < 20 && number > 11) {
            console.log(`${number} is less than 20 But, greater than 11!`);
        }

        else {
            console.log(`${number} is quite bigger`);
        }
*/

// test
// debugger
// Code - slightly modified from `DAY11` repository.
// data for username and age
let userName = "Bablu";
let userAge = 21;


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

    // Extra-condition: User's Age is 20? [Nested]
    if(userAge === 20) {
        console.log(`He/she is ${userAge}`);
    } else {
        console.log("He/she is above or below 20");

        // Extra-Condition: User's name -> length > 5   [Nested]
        if(userName.length > 5) {
            console.log(`${userName} has ${userName.length} characters in it's name`);
        } else {
            // When length is less than 5!
            console.log(`${userName} has ${userName.length} or less characters in it's name`);
        }
    }
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
    // extra-condition
    if(true) {
        console.log("Ofcourse -0 and 0 are falsy values");  //. ✅ log only when `else` block is satisfied
    }
}

/*
   🟣 Here, above Starting from Conditon `kid` ---> `working-professional` is considered as a single Conditional Block Of Execution when 
   if - else if - else is used! 🟣

    🔹 So, JS Engine doesn't check each and every IF-Else-IF-Else Statment(s)!

    EX: if user input's age as 3

    🔹 Here 1st IF condition itself satisfies the conditon (age) Right! 
    🔹 So JS Engine quickly executes the only satisfied code and also nested block would be executed!.
    🔹 Instead of checking other else-if, else blocks it ends/ terminates the program instantly/ quickly!

    🔹 IF any IF-ELSE IF block doesn't satisfy the given input then, JS Engine just executes the else block without taking much time.
    
    🔹To see this live one can do the following steps -
        1. One can see by adding `debugger` above any IF Statement given in the code! 
        2. then open `developer tools` by right clicking and selecting the inspect button
        3. After then go to `sources` tab then click on `forward-step` button to see the script execution...
    
    As Here it doesn't print other ELSE-IF(s) or ELSE Statement(s) code "Thus, taking less-time and faster as well as more-efficient!" 🐵
*/
