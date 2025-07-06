/*
Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?

Will the arguments always be 2 arrays and 2 numbers?
Will m + n always be the size of nums1?
Will m always be the number of real values in nums1?
Will n always be the size of nums2?

Will there always be no return?
Will the result be a modified nums1 array?

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3), [1,2,2,3,5,6]);
console.log(merge([1], 1, [0], 0), [1]);
console.log(merge([0], 0, [1], 1), [1]);
*/

var merge = function(nums1, m, nums2, n) {
    let midx = m - 1; //last index of nums1 real numbers
    let nidx = n - 1; //last index of nums2
    let right = m + n - 1; //last index of nums1 as a whole

    while (nidx >= 0) { //while n index is greater than or equal to 0
        if (midx >= 0 && nums1[midx] > nums2[nidx]) { //if m-i is >= 0 and nums1 at that index is greater than nums2 at n-i
            nums1[right] = nums1[midx]; //set slot at right of nums1 to item at nums1[m-i]
            midx--; //move one index left of current m-i
        } else {
            nums1[right] = nums2[nidx]; //set slot at right of nums1 to item at nums2[n-i]
            nidx--; //move one index left of current n-i
        }
        right--; //move left one spot in nums1
    }    
};