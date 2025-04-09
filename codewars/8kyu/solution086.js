/*
Will there be enough space?
The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

old:
P.R.E.P.
parameter: three numbers
return: one number
example:
(10,5,5) => 0
100,60,50 => 10
pseudocode:
declare function
set parameter
create if else statement using ternary operator
if wait > cap-on return wait - cap - on else return 0


function enough(cap, on, wait) {
    // your code here
    return wait > cap-on ? wait - (cap - on) : 0
  }

new:
Will the arguments passed into the function always be three numbers?
Will the return always be a number?

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);

is w greater than c-0 ? then return w minus c minus o else return 0
*/

const enough = (c, o, w) => w > c - o ? w - (c - o) : 0;