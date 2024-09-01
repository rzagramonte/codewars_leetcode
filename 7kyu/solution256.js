/*
Minimize Sum Of Array (Array Series #1)

Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

Will the argument passed into the function's parameter always be an array of numbers?
Will the return always be a number?

console.log(minSum([5,4,2,3]), 22);
console.log(minSum([12,6,10,26,3,24]), 342);
console.log(minSum([9,2,8,7,5,4,0,6]), 74);

TODO:
sort the array in ascending order
create new array that contains the first half of the elements from the input array
create a second array that contains the second half of elements and is sorted in descending order
iterate over first half multiplying each element with the element in the second half at the same index
reduce the array to one value
*/

const minSum = a => {
    a = a.sort((a,b)=>a-b)
    const a1 = a.slice(0, a.length/2);
    const a2 = a.slice(a.length/2).sort((a,b)=>b-a);
    return a1.map((n,i) => n * a2[i]).reduce((a,c)=>a+c);
};