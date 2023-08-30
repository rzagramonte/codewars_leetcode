/*
Regex count lowercase letters

Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26

Will the parameter always be a string?
Will the return always be a number?

console.log(lowercaseCount("abc"), 3);
console.log(lowercaseCount("abcABC123"), 3);
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
console.log(lowercaseCount(""), 0);
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0);
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
*/


//declare constant variable which will be assigned to an arrow function
//set parameter
//if the return of finding matches a-z in str is truthy return the length
//else return 0
const lowercaseCount = str => str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0;