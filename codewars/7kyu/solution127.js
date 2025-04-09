/*
Is Undefined?

Is Undefined?
Help Timmy remove undefined values from his array, you are modifing a callback function which he uses on each element on his array.
Task
Your task is to finish the isUndefined method which returns true if the value is undefined :)

Will the parameter always be a value of any data type?
Will the return always be a boolean value of true or false?

console.log(isUndefined(1),false);
console.log(isUndefined(2),false);
console.log(isUndefined(undefined),true);
console.log(isUndefined(3),false);
console.log(isUndefined(4),false);
*/

//declare constant variable isUndefined which will be assigned to arrow function
//set parameter value
//is value equal in value and type to undefined? return true or false pls
const isUndefined = value => value === undefined;