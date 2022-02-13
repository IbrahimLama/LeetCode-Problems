const removeDuplicates = (nums: number[]): number => {
    if (nums.length <= 1) {
        return nums.length;
    }

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i+1]) {
            nums[count++] = nums[i];
        }
    }

    return count;
};