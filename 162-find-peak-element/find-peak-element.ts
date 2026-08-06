function findPeakElement(nums: number[]): number {
    let n=nums.length;
    if(n===0){
        return 0;
    }

    if(nums[0]>nums[1])return 0;

    for(let i=1;i<n-1;i++){
        let left =i-1;
        let right = i+1;
        if(nums[i]>nums[left] && nums[i]>nums[right]){
            return i;
        }
    }
        return n-1;
    
};