function maxSubArray(nums: number[]): number {
    let sum =-Infinity;

    let currSum=0;


    for(let i=0;i<nums.length;i++){
        if(currSum<0){
            currSum=0;
        }

        currSum+=nums[i];
        sum=Math.max(sum,currSum);
    }
return sum;
};