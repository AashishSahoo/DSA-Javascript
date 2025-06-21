function findPeakElement(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const leftOk = i === 0 || nums[i] > nums[i - 1];
    const rightOk = i === nums.length - 1 || nums[i] > nums[i + 1];

    if (leftOk && rightOk) {
      return i;
    }
  }

  return -1; // In case no peak is found (theoretically should never happen per problem)
}
