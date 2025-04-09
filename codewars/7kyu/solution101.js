/*
Return String of First Characters

In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

Will the parameter always be a string?
Will the return always be a string?

console.log(makeString("sees eyes xray yoat"), "sexy");
console.log(makeString("brown eyes are nice"), "bean");
console.log(makeString("cars are very nice"), "cavn");
console.log(makeString("kaks de gan has a big head");
*/

//declare constant variable makeString which will be assigned to an arrow function
//set parameter s
//replace pattern of either word or space with replacement value from function which returns no space if pattern is a space or first letter of word
const makeString = s => s.replace(/\w+| /g, w => w == ' ' ? '' : w[0]);