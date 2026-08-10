function isPossibleToSplit(nums: number[]): boolean {
    const frequency = new Map<number, number>();

    for (const num of nums) {
        frequency.set(num, (frequency.get(num) || 0) + 1);

        if (frequency.get(num)! > 2) {
            return false;
        }
    }

    return true;
}