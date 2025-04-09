/*
Grasshopper - Personalized Message
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

Will the parameters always be two strings?
Will the return always be one string?

console.log(greet('Daniel', 'Daniel'), 'Hello boss');
console.log(greet('Greg', 'Daniel'), 'Hello guest');
*/


//declare variable and assign to arrow function
//set parameters
//if name and owner are equal in value and type return 'Hello boss'
//else return 'Hello guest'
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';