/*
Will you make it?
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

P.R.E.P.
parameters: three numbers distanceToPump, mpg, and fuelLeft
return: boolean of true or false
examples:
input => output
(50,25,2) => true
(100,50,1) => false
pseudocode:
declare function as anon function value
set three parameters
if fuelLeft * mpg >= distanceToPump return true else return false
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return fuelLeft * mpg >= distanceToPump;
  };