/*
ES6 string addition

It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.

Will the parameters always be two strings?
Will the return always be one string from the concatenation of two strings?

console.log(joinStrings('string1', 'string2'), 'string1 string2');
console.log(joinStrings('testing', 'testing'), 'testing testing');
console.log(joinStrings(134, 234), '134 234');
*/

//declare function and set parameters
function joinStrings(string1, string2){
    // code here
    //use return keyword
    //use template literal to interpolate string1 and string2 with a space in between
   return `${string1} ${string2}`;
 }