function findMaxConsecutiveOnes(nums: number[]): number {
   let max=0;
   let currMax=0;

   for( let i=0;i<nums.length;i++){
    if(nums[i]===1){
        currMax++;
        max=Math.max(max,currMax);

    }else{
        max=Math.max(max,currMax);
        currMax=0;
    }
   }  
   return max;
};