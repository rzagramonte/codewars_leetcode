/*
Convert a string to an array
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

P.R.E.P.
parameter: string
return: array
example:
(Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
pseudocode:
declare function
set parameter
return string appended to split() with its argument as ' '
function stringToArray(string){

	// code code code
    return string.split(' ');

}
new:
Will the argument passed into the function always be a string?
Will the return always be an array of strings?

console.log(stringToArray("Robin Singh"), ["Robin", "Singh"])
console.log(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"])

TODO:
split string by whitespace returning an array of words
*/

const stringToArray= s => s.split(' ');