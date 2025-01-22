// user-name
let user = "";

// handle score.
let score = 0;

// handle user!
user = prompt(`
    Hey there, Welcome Quizera 👶
    What's your Name?
`)

// toast [notification]
// i.e., Welcome message with some information regarding the Quiz*
alert(`
    Great 😇, ${user} 
    Let's begin with the Quiz you'll have 5 Questions each!
    
    **Things to do** 📑
    - Must give a try for each question Right!
    - Just type an Appropriate Option in the input-box (EX: B) Got It.
    - Each of them has 1 point.
    - Each answered in-correctly gives -1 point
`);


//  Question 1
const question1 = prompt(`
    Question 1️⃣
    Which was the first club of Lionel Messi?
    A.) FC BARCELONA
    B.) CF REAL MADRID
    C.) JUVENTUS
    D.) AC MILAN
`);

// check Answer
if(question1 === "A" || question1 === "a") {

    // Correct
    alert(`
        Spot ON ✅
        LIONEL MESSI ARGENTINAN GOAT started his 
        journey indeed from SPANISH FOOTBALL CLUB 
        "FC BARCELONA"
    `);

    // update the score when, correct
    score += 1;
    // console.log(score); log-score**
}
// Wrong one
else {

    alert(`
        OOPS 🤧
        Not really, Correct one is (A.) "FC BARCELONA"
    `);
}

// Question 2
const question2 = prompt(`
    Question 2️⃣
    How many number of total goals scored by Lionel Messi in *69 Official Matches*?
    A.) 66
    B.) 48
    C.) 200
    D.) 91
`);

// check Answer
if(question2 === "D" || question2 === "d") {

    // Correct
    alert(`
        DAMN, Absolutely Right 💘 
        Specifically in 2011-12,
        LIONEL MESSI scored 91 goals in 69 official games 💥 i.e., 
        including 79 goals for "FC BARCELONA" & 12 for "ARGENTINA" as National part of his Career.
    `);

    // update the score when, correct
    score += 1;
    // console.log(score); log-score**
}
// Wrong one
else {

    alert(`
        Ah 😲
        Nahhh, Option (D.) "91" is the right one!
    `);
    
}

// Question 3
const question3 = prompt(`
    Question 3️⃣
    Which Player was All Time Leading Scorer in UEFA Champions League?
    A.) Harry Kane
    B.) Cristiano Ronaldo
    C.) Lionel Messi
    D.) Eden Hazard
`);

// check Answer
if(question3 === "B" || question3 === "B") {

    // Correct
    alert(`
        WOO HOO 🤩, You're A Player 😱!
        "CRISTIANO RONALDO" is the all-time leading scorer in the UEFA Champions League, with *140 goals in 183 appearances*. He has won numerous individual accolades, including five Ballon d’Or awards 👽, and has led his teams to several championships, including five Official UEFA Champions Leagues Trophies 😵. He did scored a record 135 international goals for Portugal, making him the all-time leading scorer in men’s international football.
    `);

    // update the score when, correct
    score += 1;
    // console.log(score); log-score**
}
// Wrong one
else {

    alert(`
        C'mon 🥱
        Man, "CRISTIANO RONALDO" is the one!
    `);
    
}

// Question 4
const question4 = prompt(`
    Question 4️⃣
    Which German Player won World Cup Both as Player and as a Manager for his Nation?
    A.) George Best
    B.) Franz Beckenbauer
    C.) Karl Heiz Rummeneigge
    D.) Gerd Muller
`);

// check Answer
if(question4 === "B" || question4 === "B") {

    // Correct
    alert(`
        Niceeee 🤩, That's the One 🤫!
        "FRANZ BECKENBAUER" Nicknamed der Kaiser ("the Emperor").
        He led West Germany to victory in the 1974 FIFA World Cup, where he captained the team to their first World Cup title & also, managed West Germany to another World Cup victory in 1990, making him one of only three individuals to win the World Cup both as a player and a manager.

        **Other Un-forgetable honours**
        - helped Bayern Munich win four Bundesliga titles during his playing career.
        - awarded the Ballon d’Or twice, in 1972 and 1976, recognizing him as the best footballer in Europe.
        - In 1972, he led West Germany to the European Championship title.

    `);

    // update the score when, correct
    score += 1;
    // console.log(score); log-score**
}
// Wrong one
else {

    alert(`
        I Wonder 🫢
        dude, The German Star "FRANZ BECKENBAUER" was the one.
    `);
    
}

// Question 4
const question5 = prompt(`
    Question 5️⃣
    Which Player who scored the most Headed Goals?
    A.) Cristiano Ronaldo
    B.) Lionel Messi
    C.) Andriy Shevchenko
    D.) Didier Drogba
`);

// check Answer
if(question5 === "A" || question5 === "a") {

    // Correct
    alert(`
        SUIII 🥹, True FOOTBALLIE 😎!
        "CRISTIANO RONALDO" remains and still only the GOAT.
        To score total One Hundred Fifty-One Goals i.e., 151 just by Header 👽.

        **Some Achievements**
        - Most International Goals: Ronaldo holds the record for the most goals scored for a national team with 135 goals.

        - Most Goals in UEFA Champions League: He has scored 140 goals in the UEFA Champions League, setting a record for the most goals in the competition.
        

        - Five Ballon d’Or Awards: Ronaldo has won the Ballon d’Or five times, which is the most for a European player.
    `);

    // update the score when, correct
    score += 1;
    // console.log(score); log-score**
}
// Wrong one
else {

    alert(`
        🤯 What A Nice Football Knowledge you have 🫢
    `);
    
}

// evaluate points**
// & perks
let perk = "" ;

// 4 or 5
if (score >= 4) {

    // Well played
    perk = "🏆";
} 
else if (score >= 3) {

    // Good
    perk = "🥇";
}
else if (score >= 2) {

    // Not bad!
    perk = "🥈";
}
// 1 or 2
else if (score >= 1) {

    // Need to work!
    perk = "🥉";
}
// 0
else {

    // can do better
    perk = "🏅";
}

// lastly, A result or summary to the player-screen
alert(`
    Hey, ${user} 😛
    Good Game, Your Score till now 🥳 ${score} 
    Perk ${perk === "🏅" ? "Better luck next time" : perk} 
`);
