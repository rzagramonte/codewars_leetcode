/*
Mean vs. Median

Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

'mean' - in case mean value is larger than median value
'median' - in case median value is larger than mean value
'same' - in case both mean and median share the same value
Reminder: Median

Array will always be valid (odd-length >= 3)

Will the argument passed into the function always be an array of numbers?
Will the return always be a string?

console.log(meanVsMedian([1, 1, 1]), 'same');
console.log(meanVsMedian([1, 2, 37]), 'mean');
console.log(meanVsMedian([7, 14, -70]), 'median');

find mean and median
return correct string depending on which value is larger or if they're the same
*/

const meanVsMedian = nums => {
    nums = nums.sort((a,b)=>a-b);
    const len = nums.length;
    const mean = nums.reduce((a,c)=>a+c)/len;
    const median = len%2 ? nums[Math.floor(len/2)] : (nums[len/2-1]+nums[len/2])/2;
    return mean>median ? 'mean' : median>mean ? 'median' : 'same';
  };
  