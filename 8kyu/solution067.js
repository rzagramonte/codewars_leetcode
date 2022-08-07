/*
Total amount of points
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

/*
P.R.E.P.
paramters: array
return: a number
example:
["3:1", "2:2", "0:1"] => 4
pseudocode: 
declare function
set parameter
declare variable total and assign it to 0
map over the array, games
if game[0] === game[2] add 1 and reassign total
if game[0] > game[2] add 3 and reassign total
return total
*/

function points(games) {
    // your code here
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
  }


/*
P.R.E.P.
paramters: array
return: a number
example:
["3:1", "2:2", "0:1"] => 4
pseudocode: 
declare function
set parameter
use the reduce method to go over each element in the array
use output and current for parameters to reduce()
return output and reassign/add a number based on several conditions:
if current[0] === current[2] add 1 and reassign output
if current[0] > current[2] add 3 and reassign output
else add 0 and reassign output
*/
const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)