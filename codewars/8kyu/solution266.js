/*
Tip Calculator

Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.


Will the parameters always be a number and a string?
Will the number always be greater than 0?
Will the return always be a number?
Can the return also be a string if the input rating received is not recognized?

console.log(calculateTip(20, "Excellent"), 4);
console.log(calculateTip(26.95, "good"), 3);
*/

//declare a constant variable and assign it to an arrow function
//set the two parameters
//reassign rating to rating as all lowercase
//create switch statement
//rating should be key
//values should be all the different values that rating can be
//return appropriate number for each
//include default string if unrecognizable rating is passed in
const calculateTip = (amount, rating) => {
    rating = rating.toLowerCase();
switch (rating) {
    case "terrible": return 0;
    case "poor": return Math.ceil(amount * (5/100));
    case "good": return Math.ceil(amount * (10/100));
    case "great": return Math.ceil(amount * (15/100));
    case "excellent": return Math.ceil(amount * (20/100));
    default: return "Rating not recognised"
};
};