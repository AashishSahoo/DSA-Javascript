function countHillValley(nums: number[]): number {
    let n= nums.length;
    let count =0;


    for(let i=1;i<n;i++){
        let right = i+1;
        let left =i-1;


        if(nums[i]===nums[right] && right<n){
            while(right<n && nums[i]===nums[right]){
                right++;
                
            }
        }

        if(nums[left]<nums[i] && nums[i]>nums[right]){
            count++;
            right++;
            left++;
        }
        if(nums[left]>nums[i] && nums[i]<nums[right]){
            count++;
            right++;
            left++;
        }    
 
    }
    return count;

};