/*
Pillars
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

P.R.E.P.
paramters: three numbers
return: one number
examples:
input => output
(1, 10, 10) => 0
(2, 20, 25) => 2000
(11, 15, 30) => 15270
pseudocode:
declare function
set parameters
create if else statement
if numPill === 1 return 0
else  return width * (numPill - 2) + dist * (numPill -1) * 100
*/

function pillars(numPill, dist, width) {
    // your code here
    if (numPill === 1){
      return 0;
    }else{
      return width * (numPill - 2) + dist * (numPill -1) * 100;
    }
  }