/*
Thinkful - Number Drills: Blue and red marbles

You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:

You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

the number of blue marbles you put in the bag to start
the number of red marbles you put in the bag to start
the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
the number of red marbles pulled out so far (always lower than the starting number of red marbles)
guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

Will the parameters always be numbers?
Will the numbers always be positive?
Will the numbers always be whole numbers?
Will the return always be a number?
Will the number always be a positive number?

console.log(guessBlue(5, 5, 2, 3), 0.6);
console.log(guessBlue(5, 7, 4, 3), 0.2);
console.log(guessBlue(12, 18, 4, 6), 0.4);
*/

//declare a const variable and assign it to an arrow function
//set the parameters
const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
//declare a variable redRemain and assign it to redStart - redPulled
let redRemain = redStart - redPulled;
//declare a variable blueRemain and assign it to blueStart - bluePulled
let blueRemain = blueStart - bluePulled;
//declare variable allRemain and assign to blueRemain + redRemain
let allRemain = blueRemain + redRemain;
//return blueRemain divided by allRemain
return blueRemain / allRemain;
};
