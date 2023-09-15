/*
The old switcheroo 2

This is a follow up from my kata The old switcheroo

Write the function :

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.

// Bonus point if you don't use toLowerCase()

Will the parameter always be a string?
Will the return always be a string?

console.log(encode('abc'),'123');
console.log(encode('ABCD'),'1234');
console.log(encode('ZzzzZ'),'2626262626');
console.log(encode('abc-#@5'),'123-#@5');
*/

//declare constant variable encode which will be assigned to an arrow function
//set parameter
//replace all letters
//replacement is position in string not zero-indexed
const encode = str => str.replace(/[a-z]/gi,(l,i)=>str.charCodeAt(i)<= 90 ? str.charCodeAt(i)+32-96:str.charCodeAt(i)-96);