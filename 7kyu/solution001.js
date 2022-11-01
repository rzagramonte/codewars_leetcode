/*
String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

Will the first parameter always be a string?
Will the second parameter always be a string?

Will you need the return as only true or false?

console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
*/

function solution(str, ending){
    // TODO: complete
    //use return keyword
    //use endsWith() method
    //append method to str using dot notation
    //pass in ending as parameter for method
    return str.endsWith(ending)
  }