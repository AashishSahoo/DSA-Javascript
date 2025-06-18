function dominantIndex(nums: number[]): number {
    let max = -1, secondMax = -1, index = -1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            secondMax = max;
            max = nums[i];
            index = i;
        } else if (nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }

    return max >= 2 * secondMax ? index : -1;
}
