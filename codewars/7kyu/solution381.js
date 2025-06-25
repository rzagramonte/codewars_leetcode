/*
Exclamation marks series #5: Remove all exclamation marks from the end of words

Task
Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

Examples
"Hi!" --> "Hi"
"Hi!!!" --> "Hi"
"!Hi" --> "!Hi"
"!Hi!" --> "!Hi"
"Hi! Hi!" --> "Hi Hi"
"!!!Hi !!hi!!! !hi" --> "!!!Hi !!hi !hi"

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(remove("Hi!"), "Hi");
console.log(remove("Hi!!!"), "Hi");
console.log(remove("!Hi"), "!Hi");
console.log(remove("!Hi!"), "!Hi");
console.log(remove("Hi! Hi!"), "Hi Hi");
console.log(remove("!!!Hi !!hi!!! !hi"), "!!!Hi !!hi !hi");

TODO:
split str by words into an array
iterate over array
remove exclamation from end of each str
join array back to str
*/

const remove = str => str.split(' ').map(s => s.replace(/!+$/g, '')).join(' ');
