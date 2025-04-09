/*
Cat and Mouse - Easy Version

You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

Will the parameter always be a string?
Will the return always be a string?

console.log(catMouse('C....m'), "Escaped!");
console.log(catMouse('C..m'), "Caught!");
console.log(catMouse('C.....m'), "Escaped!");
*/

//declare a constant variable which will be assigned to an arrow function
//set parameter
//is the index of 'm' minus the index of 'C' minus 1 greater than 3? if so, return "Escaped!", else return "Caught!"
const catMouse = x => x.indexOf('m') - x.indexOf('C') - 1 > 3 ? "Escaped!" : "Caught!";