/*
Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

old:
P.R.E.P.
parameters: a string
return: a reversed string
example:
(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
pseudocode:
declare a function
set the parameter
return str appended to the method split with its argument as ' ' appended to the reverse method appended to the join method with its argument as ' '
this will split the string into an array of the words
then reverse the order of the array
then join the words back into a string seperated by a space

function reverseWords(str){
    return str.split(' ').reverse().join(' '); // reverse those words
  }

new:
Will the argument passed into the function always be a string?
Will the return always be a string?


console.log(reverseWords("hello world!"), "world! hello")
console.log(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
console.log(reverseWords("foobar"                       ),  "foobar")
console.log(reverseWords("kata editor"                  ),  "editor kata")
console.log(reverseWords("row row row your boat"        ),  "boat your row row row")

TODO:
split string by words
reverse
join string by words
*/

const reverseWords = s => s.split(' ').reverse().join(' ');