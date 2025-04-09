/*
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

Will the parameter always be an array?
Will the elements in the array all be strings?
Will the return be a string?

console.log(smash([]), "");
console.log(smash(["hello"]), "hello");
console.log(smash(["hello", "world"]), "hello world");
console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
*/

//declare const variable and assign to arrow function
//set parameter
//join strings by a space
const smash = words => words.join(" ");