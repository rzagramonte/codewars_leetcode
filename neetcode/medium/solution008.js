/*
Container With Most Water
Solved 
You are given an integer array heights where heights[i] represents the height of the ith bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Example 1:

Input: height = [1,7,2,5,4,7,3,6]

Output: 36
Example 2:

Input: height = [2,2,2]

Output: 4
Constraints:

2 <= height.length <= 1000
0 <= height[i] <= 1000
*/

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let max = 0;
    let [l, r] = [0, heights.length - 1];

    while (l < r) {
      let area = (r - l) * Math.min(heights[l], heights[r]);
      max = Math.max(max, area);
      if (heights[l] < heights[r]) l += 1;
      else r -= 1;
    }
    return max;
  }
}
