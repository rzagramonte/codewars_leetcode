/*
Keep Hydrated!
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

P.R.E.P.
parameters: a number which represents the time in hours
return: a number which represents the number of litres
examples:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
pseudocode:
declare a function litres
set a parameter time
return Math.floor(time * .5)
*/

function litres(time) {
    return Math.floor(time * .5);
  }