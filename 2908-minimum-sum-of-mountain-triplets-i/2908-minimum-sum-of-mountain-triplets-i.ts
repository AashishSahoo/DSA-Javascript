function minimumSum(nums: number[]): number {
  let minSum = Infinity
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      for (let k = j+1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[k] < nums[j]) {
          const sum = nums[i] + nums[j] + nums[k]
          minSum = Math.min(minSum, sum)
        }
      }
    }
  }
  return minSum == Infinity ? -1 : minSum
};