/*
esreveR gnirtS

Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"

Will the input always be a string?
Will the return always be a reversed input string?
*/

//Create reverse function for the String prototype
String.prototype.reverse = function() {
    return [...this].reverse().join('');
};