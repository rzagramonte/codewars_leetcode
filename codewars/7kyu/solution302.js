/*
Friday the 13th

Create a function, killCount, that accepts two arguments: an array of array pairs (the counselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intelligence. Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.


Will the arguments passed into the function always be an array of arrays of a string and number and a number?
Will return always be an array of strings?

console.log(killCount([["Mike", 7],["Alysa", 3]], 7), ["Alysa"]);
console.log(killCount([["Chad", 2], ["Tommy", 9]], 7), ["Chad"]);

TODO:
filter out elements that do not satisfy the first element in the nested array as less than jason
return only the names
*/

const killCount = (counselors, jason) => counselors.filter(e => e[1] < jason).map(e => e[0]);