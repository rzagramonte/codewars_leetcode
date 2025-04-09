/*
Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

Will the arguments passed into the function's parameters always be a string and a number?
Will the return always be a string?

console.log(remove("Hi!",1) , "Hi");
console.log(remove("Hi!!!",1) , "Hi!!");
console.log(remove("!Hi!",1) , "Hi!");

TODO:
create new variable with 0 as its value
another new variable with and empty string as its value
iterate over the input string
if the character equals '!' and c is less than n, add 1 to c
else add the character to result
return result
*/

const remove = (s,n) => {
    let c = 0;
    let result = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '!' && c < n) {
        c += 1;
      } else {
        result += s[i];
      }
    }
    return result;
  };