/*
Beginner Series #4 Cockroach
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

P.R.E.P.
parameters: a number representing speed in km/h
return: a number representing speed in cm/s rounded down to the integer (=floored)
examples:
input => output
(1.08) => 30
(1.09) => 30
(0) => 0
pseudocode:
declare function
set parameter
return Math.floor(s * 27.778)
*/

function cockroachSpeed(s) {
    //Good Luck!
    return Math.floor(s * 27.778);
  }