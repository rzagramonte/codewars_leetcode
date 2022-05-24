/*
FIXME: Replace all dots

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.

Will the parameter always be a string?
May the input string have any dots?
Will the return always be a string?
Will the returned string contain no dots?

console.log(replaceDots("one.two.three"), "one-two-three");
*/

//declare const variable and assign to arrow function
//set parameter
//replace all dots in string with dashes
const replaceDots = str => str.replaceAll(".", "-");