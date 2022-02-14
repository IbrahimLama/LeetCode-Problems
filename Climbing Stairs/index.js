/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n < 3) return n;

  let steps = [0, 1, 2];

  for (let i = 3; i < n + 1; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }

  return steps[n];
};
