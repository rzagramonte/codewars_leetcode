/*
Find Nearest square number
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Will the parameter always be a number?
Will the return always be a number?

console.log(nearestSq(1), 1);
console.log(nearestSq(2), 1);
console.log(nearestSq(10), 9);
console.log(nearestSq(111), 121);
console.log(nearestSq(9999), 10000);
*/

//declare function and set parameter
function nearestSq(n){
    //declare variable and set it to Math.sqrt(n) which will return the square root of n
    const sqrt = Math.sqrt(n);
    //declare variable and assign it to Math.round(sqrt); this will the number to the nearest integer
    const nearestInt = Math.round(sqrt);
    //return nearestInt squared
    return nearestInt**2;
}