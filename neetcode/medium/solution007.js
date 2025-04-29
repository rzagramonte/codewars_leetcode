/*
3Sum
Solved 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].

Example 2:

Input: nums = [0,1,1]

Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]

Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:

3 <= nums.length <= 1000
-10^5 <= nums[i] <= 10^5
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   * use hash
   * iterate over array
   */
  threeSum(nums) {
    nums = nums.sort((a, b) => a - b);
    const results = [];

    for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicates for the first element
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if (sum === 0) {
          // Found a triplet!
          results.push([nums[i], nums[left], nums[right]]);

          // Skip duplicates
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;

          // Move both pointers inward
          left++;
          right--;
        } else if (sum < 0) {
          left++; // Need a bigger number
        } else {
          right--; // Need a smaller number
        }
      }
    }

    return results;
  }
}
