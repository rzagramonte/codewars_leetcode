/*
Is he gonna survive?

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

Will the parameters always be two numbers?
Will the return always be a boolean of true or false?

console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);
*/

//declare variable and assign to arrow function
//set parameters
//return true or false if bullets are greater than or equal to dragons times 2
const hero = (bullets, dragons) => bullets >= dragons * 2;