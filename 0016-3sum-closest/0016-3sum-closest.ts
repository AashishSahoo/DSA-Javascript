function threeSumClosest(nums: number[], target: number): number {
  if (nums.length === 3) {
    return nums.reduce((sum, item) => sum + item, 0);
  }

  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
      }
    }
  }

  return closestSum;
}
