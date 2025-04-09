/*
Drone Fly-By

The other day I saw an amazing video where a guy hacked some wifi controlled light bulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.

Will the arguments passed into the function always be two strings?
Will the return always be a string?

console.log(flyBy('xxxxxx', '====T'), 'ooooox');
console.log(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 

TODO:
slice what the drone goes over
flip x to o
add the rest of the string that was not passed by the drone
*/

const flyBy = (lamps, drone) => lamps.slice(0,drone.length).replaceAll('x','o') + lamps.slice(drone.length);