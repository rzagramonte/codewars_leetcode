/*
How good are you really?

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

P.R.E.P.
parameters: an array of numbers and a single number
return: boolean of true or false
examples:
input => output
[89,67,100,55],89 => true
[100,99,88,98],80 => false
pseudocode:
declare function
set parameters
push yourPoints to the end of classPoints
reduce the array to one value and divide by the length of the array
compare this value to yourPoints
return true if yourPoints is greater than, else return false
*/

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    classPoints.push(yourPoints);
    let averagePoints = classPoints.reduce((acc,c)=>acc+c,0) / classPoints.length;
    return yourPoints > averagePoints ? true : false;
  }
  