/*
Miles per gallon to kilometers per liter

Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata:

1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres

Will the parameter always be a number?
Will the return always be a number?
Will the returned number always be rounded off to two decimal points?

console.log(converter(10), 3.54);
console.log(converter(20), 7.08);
console.log(converter(30), 10.62);
*/

//declare const variable and assign to arrow function
//set parameter
//multiply mpg by km/li
//return as a number
//round to two decimal points
const converter = mpg => Number((mpg * (1.609344/4.54609188)).toFixed(2))