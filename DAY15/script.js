// Let's see how JavaScript handles variable's data by storing it's Address**
/*
    Steps: ⛓️‍💥
    1️⃣ got to dev-tools by right-click + inspect
    2️⃣ go to `memory-tab`
    3️⃣ check-in ☑️ `include numerical values in snapshot`
    4️⃣ click on `take snapshot`
    5️⃣ It'll automatically create a snapshot!
    6️⃣ Now search by typing the value stored to the variable (`Ctrl + F` to open the search/ find view)

    *EX* 🔹
    - on typing jeel it show data as following
    "jeel" @22134  //. value with address preceeding via `@`

    Which is stored in `Context @12375`
    
    &&
    Under `Retainers Section:` simply reveals the details about variable or container-name in which the value and address is being stored**

    **WORKING**?
    ✔️ value is stored in section called `strings` with address to refer it like @212999

    ✔️ && @address i.e., @212999 is stored inside the name of variable instead of it's value**

    Obviously it depends on the type of data i.e.,
    if number -> JS Engine stores value w' @address in numbers-section
    if string -> JS Engine stores value w' @address in strings-section
    if boolean -> JS Engine stores value w' @address in system  -section
    
    🔴 Note: in-case of of same-value/ data-type JS Engine does not create a new-address each time instead it gives same space to both variables but, value should be same**

    *EX* 🔹
    a - true @73
    b - true @73

    name1 - "Akash" @442897
    name2 - "Singh" @442897

    c - false @75
    d - true @73

    ⚠️ But,
    Still if value is same but, created using some other technique like `concatenation` then, JS Engine allotes it a diffrent address as value is given in peices i.e.,
    "je" + "et" -> same as "jeet"
    @123 + @339            @123395

    ❕the values like "", undefined, null have constant @address (un-changed) by-default...

    However, when any operation is done like comparing the variables/ values
    the @address plays a major-role!

    As JS-Engine (run-time) uses @address to fetch the value of appropriate variable.
    Hence, values can be same but, @address might differ accordingly**

*/
// some initial data?
let userName1 = "jeet";
let userName2 = "je" + "et";
let userAge = 23;   
let isGraduate = true;
let hasJob = false;
let playsSports = null;
let likesSports = undefined;
let favPlayer = "";


/*
    *conclusion*
    JS Engine thus, ➡️ values separate and variables are kept separate too.
    & @address plays a crucial role in connecting the them...

    *WHY? ADDRESSES ARE IMPORTANT?
    ✅ In-case of Non-Primitive type like Objects, Arrays they help to compare them via @address unlike values...
    As,
    Primitives like String as stated above I made two variables userName1 and userName2 both same value but, different @address...
    But, still it results to true as both are equal*

    But, Non-Primitives the @address play a major role as they are used to compare two Objects...

*/