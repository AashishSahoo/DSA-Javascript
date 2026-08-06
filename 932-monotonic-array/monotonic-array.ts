function isMonotonic(nums: number[]): boolean {
   let n= nums.length;
   let incr = true;
   let decr = true;

//    let left =0;
//    let right =1;

   for(let i=1;i<n;i++){

    // if(nums[i]===nums[right]){
    //     while(nums[i]===nums[right]&& right <n){
    //         right++;
    //     }
    // }

    if(nums[i]<nums[i-1]){
        incr=false;
    }
    if(nums[i]>nums[i-1]){
        decr=false;
    }





   }
       return incr || decr;




}