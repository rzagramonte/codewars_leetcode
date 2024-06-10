/*
Simple Fun #384: Is Turing's Equation?

Task
You are given a string s. It's an equation such as "a+b=c", where a, b, c are numbers made up of the digits 0 to 9. This includes possible leading or trailing zeros. The equations will not contain any spaces.

Your task is to determine whether s is a valid Turing equation. Return true or false, respectively, in Turing's interpretation, i.e. the numbers being read backwards.

Examples
For s = "73+42=16", the output should be true.

73 -> 37
42 -> 24
16 -> 61
37+24==61
For s = "5+8=13", the output should be false.

5 -> 5
8 -> 8
13 -> 31
5+8!=31
For s = "10+20=30", the output should be true.

10 -> 01 -> 1
20 -> 02 -> 2
30 -> 03 -> 3
1+2==3
Note
All the numbers a,b,c no more than 10 digits, excluding leading zeros(read backwards)

s contains only digits, "+" and "=", "-","*" or "/" will not appear in the string.

Will the argument passed into the function's parameter always be a string?
Will the return always be a boolean of true or false?

console.log(isTuringEquation("5+8=13"),false);
console.log(isTuringEquation("0001000+000200=00030"),true);
console.log(isTuringEquation("7000+8000=51"),true);

TODO:
reassign to an array of reversed numbers
return true or false, if a + b = c
*/

const isTuringEquation = s => {
    s = s.split(/[+=]/g).map(s=>+([...s].reverse().join('')));
   return s[0] + s[1] == s[2];
  };