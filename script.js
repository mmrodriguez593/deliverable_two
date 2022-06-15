/*
Step 1: Prompt the user for their name.

Step 2: prompt the user if they would like to play 3 or 6 holes of mini golf.

Step 4: prompt the user either 3 times or 6 times (depending on their input for the second prompt) for each "hole of golf" asking for the number of putts for that specific hole.

Reminder: Keep track of their cumulative score (total number of putts) and at the end, compare that to the total course par (9 if they chose 3 holes, 18 if they chose 6 — par is 3 for every hole) to calculate the golfer’s total par for the round.

After the last hole, one of three messages is logged to the console depending on if the user was over, under or on par for the round:
-If over par, the message should read "Nice try, (name)... Your total par was: +(par)." [be sure to include the plus symbol here to denote over par].
-If under par, the message should read "Great job, (name)! Your total par was: -(par)." [include the minus symbol]
-If even with par, the message should read "Good game, (name). Your total par was: 0."
*/
let name = prompt ("Welcome to GC mini golf! What is your name?");

let holeCount = prompt("Hi, " + name + "! Would you like to play 3 or 6 holes?");
let score = 0;

if (holeCount == 3){
  let fOne = Number(prompt("How many putts for hole 1? (par 3)"));
  let fTwo = Number(prompt("How many putts for hole 2? (par3)"));
  let fThree = Number(prompt("How many putts for hole 3? (par 3)"));
  score = fOne + fTwo + fThree;
  overPar = score - 9;
  underPar = 9 - score;
  even = 0;

   if ( score >= 10){ 
    console.log("Nice try, "+name+"... Your total par was: +"+overPar+".");
}  
else if (score <= 8) {
    console.log("Great job, "+name+"! Your total par was: -"+underPar+"." );
}
else if (score == 9) {
    console.log("Good game, "+name+". Your total par was: 0");
}
}

 
if (holeCount == 6){
    let sOne = Number(prompt("How many putts for hole 1? (par: 3)"));
    let sTwo = Number(prompt("How many putts for hole 2? (par: 3)"));
    let sThree = Number(prompt("How many putts for hole 3? (par: 3)"));
    let sFour = Number(prompt("How many putts for hole 4? (par: 3)"));
    let sFive = Number(prompt("How many putts for hole 5? (par: 3)"));
    let sSix = Number(prompt("How many putts for hole 6? (par: 3)"));
    score = sOne + sTwo + sThree + sFour + sFive + sSix;
    overPar = score - 18;
    underPar = 18 - score;

    if ( score >= 19){ 
        console.log("Nice try, "+name+"... Your total par was: +"+overPar+".");
    }  
    else if (score <= 17) {
        console.log("Great job, "+name+"! Your total par was: -"+underPar+"." );
    }
    else if (score == 18) {
        console.log("Good game, "+name+". Your total par was: 0");
    }
}