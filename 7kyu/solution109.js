/*
reverseIt

You have to create a function named reverseIt.

Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

Examples of inputs and subsequent outputs:

"Hello" -> "olleH"

"314159" -> "951413"

[1,2,3] -> [1,2,3]

Will the parameter of any data type?
Will the return be of any data type?
If the input data type is string || number, will the return be a reversed string || number, respectively?

console.log(reverseIt('Hello'), "olleH", 'Not quite');
console.log(reverseIt(314159), 951413, 'Not quite');
console.log(reverseIt("314159"), "951413", 'Not quite');
console.log(reverseIt([]), [], 'Not quite');
*/

//declare constant variable which will be assigned to an arrow function
//set parameter data
//if type of data is equal in value to "string", split the string by characters into an array, reverse it, then join it back
//else if type of data is equal in value to "number", convert the number to a string, split the string by characters into an array, reverse it, then join it back, and return the whole thing as a number
//else return the argument passed into data
const reverseIt = data => typeof data == "string" ? data.split('').reverse().join('')
                        : typeof data == "number" ? +(data.toString().split('').reverse().join(''))
                        : data;
