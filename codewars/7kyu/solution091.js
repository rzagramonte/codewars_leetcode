/*
Most Likely

Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

Will the parameter always be two strings?
Will the format of each input string be 'a:b'?
Can a or b be a multiple digit number?
Will the return always be a boolean of true or false?

console.log(mostLikely('1:3','1:2'),false);
console.log(mostLikely('1:2','1:3'),true);
console.log(mostLikely('82:411','45:9'),false);
console.log(mostLikely('21:242','100:498'),false);
console.log(mostLikely('42:568','16:1337'),true);
*/

//declare constant variable mostLikely which will be assigned to an arrow function
//set parameters prob1 and prob2
//split prob1 by : and access the 1st element of that array
//divide before with the following
//split prob1 by : and access the 2nd element of that array
//greater than
//split prob2 by : and access the 1st element of that array
//divide before with the following
//split prob2 by : and access the 2nd element of that array
const mostLikely = (prob1,prob2) => prob1.split(':')[0] / prob1.split(':')[1] > prob2.split(':')[0] / prob2.split(':')[1];
