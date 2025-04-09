/*
Switcheroo

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

Will the parameter always be a string?
Will the return always be a string?

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');
*/

//declare a constant variable which will be assigned to an arrow function
//set parameter
//split string by characters and pass substrings into array
//iterate over the letters
//if the letter is equal in value to "a", return "b"
//if the letter is equal in value to "b", return "a"
//else return "c"
//join the substrings of the array into one string
const switcheroo = x => x.split("").map(l=>l == "a"?"b":l =="b"?"a":"c").join("");