/*
String Templates - Bug Fixing #5

Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

Will the parameter always at least one string?
Can the parameter be more than one string?
Will the return always be a string?

console.log(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
console.log(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
console.log(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');
*/

//declare const variable and assign to arrow function
//set parameter and use rest parameter
//return string using template literal
//interpolate parameter and join the strings, if more than one, by ', '
const buildString = (...template) => `I like ${template.join(', ')}!`;