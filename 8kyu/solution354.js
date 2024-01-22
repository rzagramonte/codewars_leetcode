/*
Training JS #14: Methods of Number object--toString() and toLocaleString()

Task
Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"
That's all of your work. My work is print your color code on your screen.

Will the parameter always be three numbers?
Will the return always be a string?

console.log(colorOf(255,0,0), "#ff0000");
console.log(colorOf(0,111,0), "#006f00");
console.log(colorOf(1, 2 ,3), "#010203");
*/

//create an array from the numbers passed into an array, where the second argument passed in is a mapFn that converts each number to a string with the radix of 16, padding the start of the string with 0 if necessary
//join the array to a string
const colorOf = (r,g,b) => `#${Array.from([r,g,b], (el=>el.toString(16).padStart(2,'0'))).join('')}`;