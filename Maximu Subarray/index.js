/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currSum = -Infinity;
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(0, currSum);
    currSum += nums[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};
