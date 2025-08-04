/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let n = nums.length;
      for( let i=0;i< n ;i++){
        for ( let j=0 ;j< n-i-1 ;j++){
             if(nums[j] > nums[j+1]){
                let temp = nums[j+1];
                nums[j+1]=nums[j];
                nums[j]= temp;
             }
        }
      }
};