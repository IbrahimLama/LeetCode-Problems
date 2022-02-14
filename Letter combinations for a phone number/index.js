/**
 * @param {string} digits
 * @return {string[]}
 */
const numbersToLetter = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

var letterCombinations = function (digits) {
  if (digits === '') {
    return [];
  }
  let i = 0;
  if (digits.length === 1) {
    return numbersToLetter[digits];
  }
  let previousMutations = [];
  while (i + 1 < digits.length) {
    if (i === 0) {
      previousMutations = getMutation(
        numbersToLetter[digits[i]],
        numbersToLetter[digits[i + 1]]
      );
    } else {
      previousMutations = getMutation(
        previousMutations,
        numbersToLetter[digits[i + 1]]
      );
    }

    i++;
  }

  return previousMutations;
};

var getMutation = function (array1, array2) {
  const mutations = [];
  for (let value1 of array1) {
    for (let value2 of array2) {
      mutations.push(value1 + value2);
    }
  }
  return mutations;
};
