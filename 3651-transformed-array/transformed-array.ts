function constructTransformedArray(nums: number[]): number[] {
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let newIndex = i + nums[i];

        while (newIndex < 0) {
            newIndex += n;
        }

        while (newIndex >= n) {
            newIndex -= n;
        }

        result.push(nums[newIndex]);
    }

    return result;
}