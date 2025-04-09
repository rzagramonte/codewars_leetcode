/*
Is it a vowel on this position?

Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

A few cases:

{
checkVowel('cat', 1)  ->   true // 'a' is a vowel
checkVowel('cat', 0)  ->   false // 'c' is not a vowel
checkVowel('cat', 4)  ->   false // this position doesn't exist
}
P.S. If n < 0, return false

Will the parameters always be a string and a number?
Will the return always be a boolean of true or false?

console.log(checkVowel('cat', 1), true);
console.log(checkVowel('cat', 0), false);
console.log(checkVowel('cat', 4), false);
console.log(checkVowel('Amanda', -2), false);
console.log(checkVowel('Amanda', 0), true);
console.log(checkVowel('Amanda', 2), true);
*/

//declare constant variable checkVowel which will be assigned to an arrow function
//set parameters string and position
//reassign string to the lowercase character found at the position passed in
//return true or false if that character is equal in value to a vowel
const checkVowel = (string, position) => {
    // good luck
    string = string.toLowerCase()[position];
    return string == 'a' || string == 'e' || string == 'i' || string == 'o' ||string == 'u' ;
  };