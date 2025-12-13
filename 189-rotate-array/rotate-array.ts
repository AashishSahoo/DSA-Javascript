/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k%nums.length-1;

  function reverse(str,end){
      while(str<end){
       let temp = nums[str];
       nums[str]=nums[end];
       nums[end]=temp;
       str++;
       end--;
      }
  }  
  reverse(0,nums.length-1);
  reverse(0,k);
  reverse(k+1,nums.length-1);
};