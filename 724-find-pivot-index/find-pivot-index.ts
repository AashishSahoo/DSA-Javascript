function pivotIndex(nums: number[]): number {
    let totalSum = nums.reduce((i,sum)=> sum+=i ,0);

    let leftSum=0;

    for(let i=0;i<nums.length;i++){
        let rightSum = totalSum - leftSum - nums[i];
        if(rightSum === leftSum) return i;

        leftSum+=nums[i];

    }
    return -1;
};