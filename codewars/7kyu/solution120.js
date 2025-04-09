/*
Insert dashes

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).

Will the parameter always be a number?
Will the return always be a string?

console.log(insertDash(454793),'4547-9-3');
console.log(insertDash(123456),'123456');
console.log(insertDash(1003567),'1003-567');
*/

//declare constant variable instertDash which will be assigned to an arrow function
//set parameter num
//convert num to a string and spread the characters into an array
//iterate over array
//if the current and proceeding element in the array are both truthy under mod 2, insert a dash after the current element
//return the array as a string of its elements with no pattern to join them
const insertDash = num => {
    //code me
   let numToArr = num.toString().split('');
   for(let i=0; i<numToArr.length;i++){
     if(numToArr[i]%2 && numToArr[i+1]%2) numToArr[i] =`${numToArr[i]}-`
   };
   return numToArr.join('')
 };