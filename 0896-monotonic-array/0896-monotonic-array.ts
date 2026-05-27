function isMonotonic(nums: number[]): boolean {

    let inc= true;
    let dec = true;

    for(let i=1;i<nums.length ;i++){
         if(nums[i-1]>nums[i]) inc = false;

         if(nums[i-1]<nums[i])dec= false;

        
    }
        
    
    return inc || dec;
};