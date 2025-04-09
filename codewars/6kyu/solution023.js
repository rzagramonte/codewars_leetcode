/*
Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/


/*
Will the argument passed into the function always be a string?
Will the string be of any characters?
Can the letter in the alphabet be lower and uppercase? Function should ignore casing.
Will the string ever be a empty?
Will the return always be a string? Will the string only consist of the following characters: "(" or ")" ?
Will the returning string will ever be empty?

TODO:
iterate through the string
at each loop: find the index of the current element behind and ahead of itself
if not -1 return "(" else return ")"

*/

const duplicateEncode = word => {
    word = word.toLowerCase();
    return [...word].map(e=>word.indexOf(e) == word.lastIndexOf(e)  ? "(" : ")").join('');
};


console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())");
console.log(duplicateEncode("(( @"),"))((");
  
  
  