/*
Maximum Gap (Array Series #4)

Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives and negatives also zeros_

Repetition of numbers in the array/list could occur.

The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .

Note : Regardless the sign of negativity .

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .

Note : Regardless the sign of negativity .

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .

Note : Regardless the sign of negativity .

Will the argument passed into the function always be an array of numbers?
Will the return always be a number?

console.log(maxGap([13,10,2,9,5]),4);
console.log(maxGap([13,3,5]),8);
console.log(maxGap([24,299,131,14,26,25]),168);
console.log(maxGap([-3,-27,-4,-2]),23);
console.log(maxGap([-7,-42,-809,-14,-12]),767);
console.log(maxGap([12,-5,-7,0,290]),278);
console.log(maxGap([-54,37,0,64,-15,640,0]),576);
console.log(maxGap([130,30,50]),80);
console.log(maxGap([1,1,1]),0);
console.log(maxGap([-1,-1,-1]),0);

TODO:
sort array in descending order
iterate over array
return current element minus next element or 0
return largest number in new array
*/

const maxGap = arr => Math.max(...arr.sort((a,b)=>b-a).map((e,i)=> e-arr[i+1] || 0));