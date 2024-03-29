/*
Did we win the Super Bowl?

It's the fourth quater of the Super Bowl and your team is down by 4 points. You're 10 yards away from the endzone, if your team doesn't score a touchdown in the next four plays you lose. On a previous play, you were injured and rushed to the hospital. Your hospital room has no internet, tv, or radio and you don't know the results of the game. You look at your phone and see that on your way to the hospital a text message came in from one of your teamates. It contains an array of the last 4 plays in chronological order. In each play element of the array you will receive the yardage of the play and the type of the play. Have your function let you know if you won or not.

What you know:
Gaining greater than 10 yds from where you started is a touchdown and you win.
Yardage of each play will always be a positive number greater than 0.
There are only four types of plays: "run", "pass", "sack", "turnover".
Type of plays that will gain yardage are: "run", "pass".
Type of plays that will lose yardage are: "sack".
Type of plays that will automatically lose the game are: "turnover".
When a game ending play occurs the remaining (plays) arrays will be empty.
If you win return true, if you lose return false.

Will the argument passed into the array's parameter always be an array?
Will the elements of the input array always be arrays?
Will the elements of the elements of the input array always be a number and a string of either "run", "pass", "sack", "turnover"?
Can there be empty nested arrays?
Will the return always be a boolean of either true or false?

console.log(didWeWin([[8, "pass"],[5, "sack"],[3, "sack"],[5, "run"]]), false);
console.log(didWeWin([[12, "pass"],[],[],[]]), true);
console.log(didWeWin([[2, "run"],[5, "pass"],[3, "sack"],[8, "pass"]]), true);
console.log(didWeWin([[5, "pass"],[6, "turnover"],[],[]]), false);
*/

//go through array determining if score will be increased or decreased and by how much
//if score is greater than 0 return true else return false
const didWeWin = plays => {
    let score = -10;
    for(const play of plays){
      if(play.includes("run") || play.includes("pass")) score += play[0];
      else if(play.includes("sack")) score -= play[0];
      else if(play.includes("turnover")) score = 0;
      else if(!play.length) score += 0;
    };
    return score > 0;
};