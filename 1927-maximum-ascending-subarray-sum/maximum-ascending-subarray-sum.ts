function maxAscendingSum(nums: number[]): number {
    let r=1;
    let n = nums.length;
    let sum=nums[0];
    let  maxSum = nums[0];

    while(r<n){
        while(r<n && nums[r]>nums[r-1]){
            sum+=nums[r];
            r++;
        }
        maxSum = Math.max(maxSum , sum);
        if(r<n){
            sum=nums[r];
        }
        r++;

    }
    return maxSum;
};