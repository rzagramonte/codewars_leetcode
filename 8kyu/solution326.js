/*
Count words

Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

Let's take a look on some examples:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on
What kind of tests we made for your code:

Function have to count words and not spaces. You have to be sure that you doing it right
Empty string has no words.
String with spaces around should be trimmed.
Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
Doublecheck that words with chars like -, ', ` are counted right.

Will the parameter always be a string?
Will the return always be a number?

console.log(countWords("Hello"), 1);
console.log(countWords("With! Symbol@ #Around! (Every) %Word$"), 5);
console.log(countWords(" Arthur "), 1);
console.log(countWords("  Hello     Bart  "), 2);
console.log(countWords("﻿Hello﻿World "), 2);
console.log(countWords("Hello﻿World"), 2);
*/

//declare function and set parameter to return the length of either an empty array or a match of any word
function countWords(str) {
    // ...
    return (str.match(/[^\s]+/g) || []).length;
  }