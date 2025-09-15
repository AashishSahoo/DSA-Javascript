/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
   let index=0;

   for( let i=0;i<nums.length ;i++){
    if(nums[i] !== 0){
        nums[index] = nums[i];
        index++;
    }
   }
   
   while(index < nums.length){
    nums[index] =0;
    index++;
   }

    // let zeroCount =0;
    // for( let i=0;i< nums.length ;i++){
    //       if(nums[i] === 0){
            
    //         zeroCount++;
    //       }
    // }
    // nums = nums.sort((a,b) => a-b);

    // for( let i=0;i<zeroCount;i++){
    //     nums.shift();
    // }

    // for( let i=0;i<zeroCount;i++){
    //     nums.push(0);
    // }
        



};