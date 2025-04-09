/*
Anagram Detection

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

Will the arguments passed into function's parameters always be two strings?
Will the return always be true or false?
*/

//return true or false if test is an anagram of original
var isAnagram = (test, original) => [...test.toLowerCase()].sort().join('') == [...original.toLowerCase()].sort().join('');
