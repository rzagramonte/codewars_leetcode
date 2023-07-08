/*
Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

Will the parameters always be an array or string?
Will the return always be a number or a string?
console.log(multi([5, 1, 5]), 25);
console.log(add([9, 8, 5]), 22);
console.log(reverse("Reverse"), "esreveR");
*/

//reduce elements to one value by multipling them all together
const multi = arr => arr.reduce((a,c)=>a*c,1);
//reduce elements to one value by adding them all together
const add = arr => arr.reduce((a,c)=>a+c,0);
//split, reverse, and join stringg
const reverse = str => str.split('').reverse().join('');