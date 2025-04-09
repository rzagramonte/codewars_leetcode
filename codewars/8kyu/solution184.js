/*
Online RPG: player to qualifying stage?

Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

Otherwise return, False/false (according to the language in use).

Will the parameter always be a number?
Will the return always be a string or boolean?

console.log(playerRankUp(64), false);
console.log(playerRankUp(101), "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.");
*/

//declare function and set parameter
function playerRankUp (points) {
    //use return keyword
    //if points is greater than or equal to 100, then return string
    //else return boolean of false
    return points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false;
  }