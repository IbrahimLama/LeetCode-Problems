/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums: number[], val: number) => {
  let count = 0;
  for (let number of nums) {
    if (number !== val) {
      nums[count] = number;
      count++;
    }
  }

  return count;
};
