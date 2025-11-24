function findMaxConsecutiveOnes(nums: number[]): number {
   let max=0;
   let currMax=0;


   for( let i=0;i<nums.length;i++){
       if(nums[i] === 1){
            currMax++;
            max= Math.max(currMax,max);

        }else{
            currMax=0;            
       }
   }


   return max;
};