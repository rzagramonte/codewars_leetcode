/*
Convert the score

You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

e.g. "The score is four nil" should return [4,0]

Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

"new score: two three"
  
"two two"
  
"Arsenal just conceded another goal, two nil"
Note:

Please return an array
Please rate and enjoy!

Will the parameter always be a string?
Will the return always be an array?

console.log(scoreboard("The score is four nil"), [4,0]);
console.log(scoreboard("new score: two three"), [2,3]);
console.log(scoreboard("two two"), [2,2]);
console.log(scoreboard("Arsenal just conceded another goal, two nil"), [2,0]);
*/


//declare constant scoreboard variable which will be assigned to an arrow function
//set parameter string
//split the string and grab the last two words
//convert those words to their corresponding number
//return the numbers in an array
const scoreboard = string => [string.split(' ')[string.split(' ').length-2],string.split(' ')[string.split(' ').length-1]].map(e=>e=='nil'?0:e=='one'?1:e=='two'?2:e=='three'?3:e=='four'?4:e=='five'?5:e=='six'?6:e=='seven'?7:e=='eight'?8:9);