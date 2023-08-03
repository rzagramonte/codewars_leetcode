/*
makeBackronym

Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

dict["P"] == "perfect"
Examples
"dgm" ==> "disturbing gregarious mustache"

"lkj" ==> "literal klingon joke"

Will the parameter always be a string?
Will the input string always contain letters a-z?
Will the input string not contain any spaces?
Will the preloaded dictionary contain only uppercase letters for keys?
Will the return always be a string?
Will the returned string contain a single space between each word?

console.log(makeBackronym('dgm'), 'disturbing gregarious mustache');
console.log(makeBackronym('lkj'), 'literal klingon joke');
console.log(makeBackronym('interesting'), 'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious');
console.log(makeBackronym('codewars'), 'confident oscillating disturbing eager weird awesome rant stylish');
*/
//preload variable: dict

//declare constant variable which will be assigned to an arrow function
//set parameter
//split given string into an array of letters
//map over array pulling the value for each matched uppercase key
//join the array back into a string with a single space between each element or word in the string
const makeBackronym = string => string.split('').map(l=>dict[l.toUpperCase()]).join(' ');