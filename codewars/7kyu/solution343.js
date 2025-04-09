/*
Name Array Capping

Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

Examples
['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']

Will the argument passed into the function always be an array of strings?
Will the return always be an array of strings?


console.log(capMe(['johnny']), ['Johnny']);
console.log(capMe(['RALPH', 'GEORGIA', 'CHRISTINA']), ['Ralph', 'Georgia', 'Christina']);

TODO:
iterate over array
first letter caps
rest of the string lowercase
*/

const capMe = names => names.map(e=>e[0].toUpperCase()+e.slice(1).toLowerCase());