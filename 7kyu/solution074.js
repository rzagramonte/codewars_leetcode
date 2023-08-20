/*
Selective fear of numbers

I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

Will the parameters always be a string and a number?
Will the return always be a boolean of either true or false?

console.log(AmIAfraid("Monday", 13), false);
console.log(AmIAfraid("Sunday", -666), true);
console.log(AmIAfraid("Tuesday", 2), false);
console.log(AmIAfraid("Tuesday", 965), true);
console.log(AmIAfraid("Friday", 2), true);
*/

//declare a constant variable which will be assigned to an arrow function
//set parameters
//create an expression comparing day and num in different value combinations
const AmIAfraid = (day, num) => day == "Monday" && num == 12 || day == "Tuesday" && num > 95 || day == "Wednesday" && num == 34 || day == "Thursday" && !num || day == "Friday" && !(num%2) || day == "Saturday" && num == 56 || day == "Sunday" && Math.abs(num) == 666;