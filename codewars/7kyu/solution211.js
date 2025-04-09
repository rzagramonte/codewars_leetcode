/*
Partial Word Searching

Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

Will the arguments passed into the function's parameters always be a string and an array of strings?
Will the return always be an array of strings?

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"]);
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"]);
*/

//filter out string that matches the query
//if the length of the resulting array is truthy, return the results else return an array with one string "Empty"
const wordSearch = (query, seq) => {
    const results = seq.filter(e=>e.toLowerCase().includes(query.toLowerCase()));
    return results.length ? results : ["Empty"];
  };