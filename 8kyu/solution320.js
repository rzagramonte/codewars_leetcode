/*
Find variable which breaks strict comparison!

In JavaScript, there is a special case where strict comparison of the same variable returns false! Try to find out what must be done to get such result!

var x = something;
x === x // returns false!
Write a function which will return value for which strict comparison will give false!

Will the return always a value that breaks strict equality?
*/

//declare constant variable findStrangeValue which will be assigned to an arrow function
//return NaN
const findStrangeValue = () => NaN;