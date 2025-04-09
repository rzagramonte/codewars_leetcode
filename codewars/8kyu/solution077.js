/*
A wolf in sheep's clothing
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

old:
P.R.E.P.
paramters: an array
return: a string
example:
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
pseudocode:
declare function
set parameter
create for loop to iterate over the array
let i = 0
i < queue.length
i++
create if else statement
if i == queue.length-1 && queue[i] === "wolf" then return "Pls go away and stop eating my sheep"
else if(queue[i] === 'wolf') let n = queue.length - (i + 1) return "Oi! Sheep number ${n}! You are about to be eaten by a wolf!"
function warnTheSheep(queue) {
    for(let i = 0; i<queue.length; i++){
        if (i==queue.length-1 && queue[i] === 'wolf'){
            return "Pls go away and stop eating my sheep"
        }else if (queue[i] === 'wolf'){
          let n = queue.length - (i + 1);
            return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`;
        }
    }
}

new:

Will the argument passed into the function always be an array of strings?
Will the return always be a string?

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]),"Oi! Sheep number 2! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]),"Oi! Sheep number 5! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]),"Oi! Sheep number 6! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "wolf", "sheep"]),"Oi! Sheep number 1! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["wolf"]),"Pls go away and stop eating my sheep");
console.log(warnTheSheep(["sheep", "sheep", "wolf"]),"Pls go away and stop eating my sheep");

TODO:
loop through array and return specific string (breaking out of the loop) based on the position of "wolf"
*/

const warnTheSheep = q => {
    for(const a of q){
      if (q.indexOf(a) == q.length-1 && a == 'wolf') return "Pls go away and stop eating my sheep";
      if (a == 'wolf') return `Oi! Sheep number ${q.length - (q.indexOf(a) + 1)}! You are about to be eaten by a wolf!`;
      };
  };