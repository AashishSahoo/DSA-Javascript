function constructTransformedArray(nums: number[]): number[] {
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let idx = ((i + nums[i]) % n + n) % n;
        result[i] = nums[idx];
    }

    return result;
}