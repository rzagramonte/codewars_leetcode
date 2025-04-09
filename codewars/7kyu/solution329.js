/*
Substituting Variables Into Strings: Padded Numbers

Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5); // should return "Value is 00005"

in:
number

TODO:
return string with interpolated number
pad the start with 0 to a 5 digit number

out:
string


console.log(solution(5),"Value is 00005")
console.log(solution(1204),"Value is 01204")
console.log(solution(109),"Value is 00109")
console.log(solution(0),"Value is 00000")


*/

const solution = (value) => `Value is ${"0".repeat(5 - `${value}`.length)}${value}`;