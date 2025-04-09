/*
Rock Off!

Alice and Bob have participated to a Rock Off with their bands. A jury of true metalheads rates the two challenges, awarding points to the bands on a scale from 1 to 50 for three categories: Song Heaviness, Originality, and Members' outfits.

For each one of these 3 categories they are going to be awarded one point, should they get a better judgement from the jury. No point is awarded in case of an equal vote.

You are going to receive two arrays, containing first the score of Alice's band and then those of Bob's. Your task is to find their total score by comparing them in a single line.

Example:

Alice's band plays a Nirvana inspired grunge and has been rated 20 for Heaviness, 32 for Originality and only 18 for Outfits. Bob listens to Slayer and has gotten a good 48 for Heaviness, 25 for Originality and a rather honest 40 for Outfits.

The total score should be followed by a colon : and by one of the following quotes: if Alice's band wins: Alice made "Kurt" proud! if Bob's band wins: Bob made "Jeff" proud! if they end up with a draw: that looks like a "draw"! Rock on!

The solution to the example above should therefore appear like '1, 2: Bob made "Jeff" proud!'.

Will the parameters always be two arrays?
Will the elements in the input arrays always be numbers?
Will the length of the input arrays always be 3 for each?
Will the return always be a string?

console.log(solve([47, 7, 2], [47, 7, 2]),'0, 0: that looks like a "draw"! Rock on!');
console.log(solve([47, 67, 22], [26, 47, 12]),'3, 0: Alice made "Kurt" proud!');
console.log(solve([25, 50, 22], [34, 49, 50]),'1, 2: Bob made "Jeff" proud!');
*/

//declare constant variable which will be assigned to an arrow function
//set parameters
//declare constant variable arr and assign to an array holding two elements of 0
//iterate over a
//for each element, if it is greater than the element at the same index of b, add 1 to the first element in arr
//if it is less than the element at the same index of b, add 1 to the second element in arr
//return correct string based on which element in arr is greater/less than or if they are equal to each other
const solve = (a, b) => {
    const arr = [0,0];
    a.forEach((e,i)=>{
      if(e>b[i]) arr[0] += 1;
      else if(e<b[i]) arr[1] += 1;
    });
    return arr[0] > arr[1] ? `${arr[0]}, ${arr[1]}: Alice made "Kurt" proud!` 
         : arr[0] < arr[1] ? `${arr[0]}, ${arr[1]}: Bob made "Jeff" proud!`
         : `${arr[0]}, ${arr[1]}: that looks like a "draw"! Rock on!`;
  };