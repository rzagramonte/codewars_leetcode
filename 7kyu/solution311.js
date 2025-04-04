/*
Caffeine Script

Complete the function which takes a non-zero integer as its argument. If the integer is divisible by 3, return the string "Java". If the integer is divisible by 3 and divisible by 4, return the string "Coffee". If one of the condition above is true and the integer is even, add "Script" to the end of the string. If none of the condition is true, return the string "mocha_missing!"

Examples
1   -->  "mocha_missing!"
3   -->  "Java"
6   -->  "JavaScript"
12  -->  "CoffeeScript"

Will the argument passed into the function always be a counting number?
Will the return always be a string?

console.log(caffeineBuzz(1), "mocha_missing!");
console.log(caffeineBuzz(3), "Java");
console.log(caffeineBuzz(6), "JavaScript");
console.log(caffeineBuzz(12), "CoffeeScript");

TODO:
create a list of conditionals to return the correct string
*/

const caffeineBuzz = n => {
    if(!(n%3) && !(n%4) && !(n%2)) return "CoffeeScript";
    if(!(n%3) && !(n%2)) return "JavaScript";
    if(!(n%3) && !(n%4)) return "Coffee";
    if(!(n%3)) return "Java";
    return "mocha_missing!"
  };