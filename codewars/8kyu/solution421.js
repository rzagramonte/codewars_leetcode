/*
Be Concise II - I Need Squares

You are given a program squaresOnly that accepts an array of natural numbers up to and including 100 (and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.

Refactor the solution to use as few characters as possible. There is a maximum character limit of 127. Here are a few hints:

There are a lot of handy built-in Array methods in Javascript that you may have never heard of even after completing a basic course in Javascript (e.g. those provided by Codecademy) - well, at least I haven't heard of until quite recently. You may also want to research any new built-in methods offered by ES6, the newest specification of Javascript at the time of writing.
Don't you think the array parameter is a bit wordy? ;)
Good luck! :D

Will the argument passed into the function always be an array of numbers?
Will the return always be an array of numbers?

console.log(squaresOnly([0,1,2,3,4,5,6,7,8,9,10]), [0,1,4,9]);
console.log(squaresOnly([31,33,35,37,39,38,36,34,32]), [36]);
console.log(squaresOnly([0,10,20,30,40,50,60,70,80,90,100]), [0,100]);
console.log(squaresOnly([20,19,18,17,16,15,13,11,9,1,5,4]), [16,9,1,4]);
console.log(squaresOnly([45,36,75,64,9,9,4,1,4,1,1,16,16,18,17,35,25,35]), [36,64,9,9,4,1,4,1,1,16,16,25]);

TODO:
filter numbers that are squares
*/

const squaresOnly = arr => arr.filter(e => Number.isInteger(Math.sqrt(e)));
