/*
Counting Duplicates

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

Will the argument passed into the function always be a string?
Will the return always be a number?

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2);
console.log(duplicateCount("Indivisibility"), 1);
console.log(duplicateCount("Indivisibilities"), 2);

TODO:
create object
iterate over string in all lowercase
if the character exists as a key in the object, add 1 to it
else create they key and set it to 1
create array of values in the object
filter elements greater than 1
return the length of this array
*/

const duplicateCount = text => {
    const chars = {};
    for(const char of text.toLowerCase()){
      if(chars[char]) chars[char] += 1;
      else chars[char] = 1;
    };
    return Object.values(chars).filter(e=>e>1).length;
  };