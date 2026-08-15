function isTrionic(nums: number[]): boolean {
    let n = nums.length;

    let i = 1;

    // Increasing
    while (i < n && nums[i] > nums[i - 1]) {
        i++;
    }

    let p = i;

    // Decreasing
    while (i < n && nums[i] < nums[i - 1]) {
        i++;
    }

    let q = i;

    // Increasing
    while (i < n && nums[i] > nums[i - 1]) {
        i++;
    }

    return 1 < p && p < q && q < i && i === n;
}