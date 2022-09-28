/*
Is he gonna survive?

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
P.R.E.P.
parameters: two non-negative integers
return: a boolean of true or false
example:
input => output
(3,10) => false
(55,24) => true
pseudocode:
declare a function named hero
set parameters bullets and dragons
assign a variable bulletsNeeded to dragons * 2
create if else statement using ternary operator
if bullets >= bulletsNeeded return true else false
*/

function hero(bullets, dragons){
    //Get Coding!
      let bulletsNeeded = dragons * 2;
      return bullets >= bulletsNeeded ? true : false;
    }