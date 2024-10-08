/*
Move 10


Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

Will the argument passed into the function always be a string?
Will the string only contain letters?
Will the return always be a string of letters?

console.log(moveTen("testcase"), "docdmkco");
console.log(moveTen("codewars"), "mynogkbc");
console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");

TODO:
convert string to array of letters
iterate over array to shift letters 10 places to the right or loop back to the front of the alphabet
*/

const moveTen = s => {
    return [...s].map(e=>{
      const add10 = e.charCodeAt(0) + 10;
      return String.fromCharCode(add10 > 122 ? add10 - 122 + 96 : add10)}).join("");
  };