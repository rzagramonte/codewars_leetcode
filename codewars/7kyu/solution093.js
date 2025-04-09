/*
Regex Failure - Bug Fixing #2

Regex Failure - Bug Fixing #2
Oh no, Timmy's received some hate mail recently but he knows better. Help Timmy fix his regex filter so he can be awesome again!

Will the parameter always be a string?
Will the return always be a string?

console.log(filterWords("You're Bad! timmy!"),"You're awesome! timmy!");
console.log(filterWords("You're MEAN! timmy!"),"You're awesome! timmy!");
*/

//declare a constant variable filterWords which will be assigned to an arrow function
//set parameter phrase
//replace words, in any casing, bad, mean, ugly, horrible, hideous with awesome
const filterWords = phrase => phrase.replace(/(bad|mean|ugly|horrible|hideous)/gi,'awesome');