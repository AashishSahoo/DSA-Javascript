function maxSubArray(nums: number[]): number {
    // if(nums.length ===1) return nums[0];

    // let maxSum = nums[0];
    // let sum=0;

    // for(let i=0;i<nums.length ;i++){
    //      if(sum <0){
    //         sum=0;
    //      }
    //      sum +=nums[i];
    //      maxSum = Math.max(maxSum ,sum);


    // }
    // return maxSum;

    let maxSum = nums[0];
    let sum=0;

    for( let i=0;i<nums.length ;i++){
        if( sum <0){
            sum = 0;
        }
        sum += nums[i];
        maxSum= Math.max(sum ,maxSum);
    }
    return maxSum;
};
