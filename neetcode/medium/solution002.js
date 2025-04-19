/*
Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
Constraints:

1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.

TODO:
count the frequency of each number
sort the entries by frequency
take the top k frequent elements
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};

        for (const num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }
        
        const sortedEntries = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);

        return sortedEntries.slice(0, k).map(entry => +entry[0]);
    }
}
