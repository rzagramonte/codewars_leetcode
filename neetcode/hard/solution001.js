/*
Trapping Rain Water
Solved 
You are given an array non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

Return the maximum area of water that can be trapped between the bars.

Example 1:
Input: height = [0,2,0,3,1,0,1,3,2,1]

Output: 9
Constraints:

1 <= height.length <= 1000
0 <= height[i] <= 1000
*/

// class Solution {
//   /**
//    * @param {number[]} height
//    * @return {number}
//    */
//   trap(height) {
//     let left = 0;
//     let right = height.length - 1;
//     let leftMax = 0;
//     let rightMax = 0;
//     let water = 0;

//     while (left < right) {
//       if (height[left] < height[right]) {
//         if (height[left] >= leftMax) {
//           leftMax = height[left];
//         } else {
//           water += leftMax - height[left];
//         }
//         left++;
//       } else {
//         if (height[right] >= rightMax) {
//           rightMax = height[right];
//         } else {
//           water += rightMax - height[right];
//         }
//         right--;
//       }
//     }
//     return water;
//   }
// }

class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    if (!height.length) return 0;
    let [l, r] = [0, height.length - 1];
    let [leftMax, rightMax] = [height[l], height[r]];
    let res = 0;

    while (l < r) {
      if (leftMax < rightMax) {
        l += 1;
        leftMax = Math.max(leftMax, height[l]);
        res += leftMax - height[l];
      } else {
        r -= 1;
        rightMax = Math.max(rightMax, height[r]);
        res += rightMax - height[r];
      }
    }
    return res;
  }
}
