/*
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

console.log(duplicateCount("abcde"), 0) # no characters repeats more than once
console.log(duplicateCount("aabbcde"), 2)
console.log(duplicateCount("aabBcde"), 2)
console.log(duplicateCount("indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2)
console.log(duplicateCount("aA11"), 2)
console.log(duplicateCount("ABBA"), 2)

TODO:
lowercase str
create obj
iterate over str
if char exists in count, add 1
if it doesnt, create it and set it to 1
filter the values over 1
return the number of distinct dups
*/

const duplicateCount = (str) => {
  str = str.toLowerCase();

  const count = {};

  for (let char of str) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  return Object.values(count).filter((e, i) => e > 1).length;
};
