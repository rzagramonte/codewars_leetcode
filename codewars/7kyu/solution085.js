/*
Area of a Circle

Complete the function which will return the area of a circle with the given radius.

Round the returned number to two decimal places. If the radius is not positive or not a number, return false.

Will the parameter always be one value?
Will the return always be a number or a boolean of false?

console.log(circleArea(-1485.86), false)
console.log(circleArea(0), false)
console.log(circleArea(43.2673), 5881.25)
console.log(circleArea(68), 14526.72)
console.log(circleArea("number"), false)
*/


//declare constant variable circleArea which will be assigned to an arrow function
//set parameter
//is radius not a number after type coercion?
//OR
//is radius less than or equal to 0?
//if so, return false
//else return the area of a circle using radius and return number to the nearest 2 decimals
const circleArea = radius => isNaN(radius) || radius <= 0 ?  false : +((Math.PI * radius**2).toFixed(2));