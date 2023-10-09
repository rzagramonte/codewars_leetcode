/*
Cat Years, Dog Years (2)

This is related to my other Kata about cats and dogs.

Kata Task
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:

Results are truncated whole numbers of "human" years
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

Will the parameters always be two numbers?
Will the return always be an array?
Will the elements of the returned array always be numbers?

console.log(ownedCatAndDog(15,15), [1,1]);
console.log(ownedCatAndDog(24,24), [2,2]);
console.log(ownedCatAndDog(56,64), [10,10]);
*/

//declare constant variable ownedCatAndDog which will be assigned to an arrow function
//set parameters catYears and dogYears
//create new array using square bracket notation
//first element: is catYears less than 15? return 0
//else is catYears less than 24? return 1
//else is catYears less than 28? return 2
//else return correct human years past 2
//second element: is dogYears less than 15? return 0
//else is dogYears less than 24? return 1
//else is dogYears less than 29? return 2
//else return correct human years past 2
const ownedCatAndDog = (catYears, dogYears) => [catYears < 15 ? 0 : catYears < 24 ? 1 : catYears < 28 ? 2 : 2+Math.floor((catYears-24)/4),dogYears < 15 ? 0 : dogYears < 24 ? 1 : dogYears < 29 ? 2 : 2+Math.floor((dogYears-24)/5)];
