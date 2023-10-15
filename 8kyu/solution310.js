/*
Circular Objects #1 - Running around in circles

Task
Define a circular object circular such that the following are true:

circular.value === "Hello World"
circular === circular.self
circular.self === circular.self.self
... and so on.

NOTE: The code above is pseudocode. If you actually tested your circular object like this with equality or identity operators, it would not work as object literals do not have an intrinsic value.

Will the input be properties named value and self?
Will the return either be an object or a string?

console.log(circular.value === "Hello World", true);
console.log(circular === circular.self, true);
console.log(circular.self === circular.self.self, true);
*/

//declare constant variable circular which will be assigned to an object using object literal notation
//assign value to string
//assign self to variable circular
const circular = {};
circular.value= "Hello World";
circular.self= circular;
