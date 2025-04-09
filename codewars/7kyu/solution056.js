/*
Upstream/Downstream

Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

Input

You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

Output

The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.

Will the parameters always be two numbers and one string?
Will the return always be a number?
If the returned number is a floating point number, will it always be rounded to the nearest hundredths decimal point?

console.log(time(24,10,"Downstream 2"),2);
console.log(time(24,14,"Upstream 2"),2);
console.log(time(54,28,"Downstream 3"),1.74);
*/

//declare constant variable which will be assigned to an arrow function
//set parameters
//if stream includes "Downstream" add the number in the stream string to boatSpeed and divide distance by this sum
//else substract the number in the stream string from boatSpeed and divide distance by this difference
//return all as a number
const time = (distance,boatSpeed,stream) => stream.includes("Downstream") ? +((distance / (boatSpeed + (+stream.split(' ')[1]))).toFixed(2)) : +((distance / (boatSpeed - +stream.split(' ')[1])).toFixed(2));