function maxOperations(nums: number[]): number {
    const score = nums[0] + nums[1];

    let operations = 0;

    for (let i = 1; i < nums.length; i += 2) {
        if (nums[i] + nums[i - 1] !== score) {
            break;
        }

        operations++;
    }

    return operations;
}