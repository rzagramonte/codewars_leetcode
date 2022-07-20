/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
P. - parameters: two numbers
R. - return: true if flower1 === odd && flower2 === even || if flower1 === even && flower2 === odd; false if anything else
E. - example/edge cases:
flower1 === 1 && flower2 === 2 returns true
flower1 === 1 && flower2 === 3 returns false
flower1 === 4 && flower2 === 6 returns false
flower1 === 4 && flower2 === 5 returns true
P. - pseudocode:
declare function or create a function expression named lovefunc
provide two parameters flower1 and flower2
once arguments are passed in, create if else statement
if f1 is odd and f2 is even return true
else if f1 is even and f2 is odd return true
else return false
use modulus for if and else if
*/

function lovefunc(flower1, flower2){
    // moment of truth
    if ((flower1 % 2 === 0) && (flower2 % 2 !== 0)){
        return true;
    }else if((flower1 % 2 !== 0) && (flower2 % 2 === 0)){
        return true;
    }else{
        return false;
    }
  }