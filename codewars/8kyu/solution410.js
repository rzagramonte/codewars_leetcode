/*
Smallest unused ID

Hey awesome programmer! You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique! Therefore you need a method, which returns the smallest unused ID for your next new data item...
Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
Go on and code some pure awesomeness!

Will the argument passed into the function always be an array of numbers?
Will the return always be a number?

console.log(nextId([0,1,2,3,5]), 4);
console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
console.log(nextId([1,2,0,2,3,5]), 4);

TODO:
remove dups
sort the the array from smallest to largest
if the first element is not 0, return 0
loop the array until condition (ids[i+1] - ids[i] == 1) is not met
at each iteration, increment i by 1
return element at i plus 1
*/

const nextId = ids => {
    ids = [...new Set(ids.sort((a,b)=>a-b))];
    if(ids[0]) return 0;
    let i = 0;
    while(ids[i+1] - ids[i] == 1){i++};
    return ids[i] + 1;
  };