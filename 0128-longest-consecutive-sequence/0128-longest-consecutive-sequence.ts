function longestConsecutive(nums: number[]): number {
    if(nums.length ===0 ) return 0;
    nums=nums.sort((a,b)=> a-b);
    
    
    let currLen=1
    let maxLen=1;
    console.log(nums)

    for(let i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]) continue;
        if(nums[i]=== nums[i-1]+1){
            currLen++;
         }else{
           maxLen= Math.max( currLen , maxLen);
           currLen=1;
         }
    }
    maxLen = Math.max(maxLen, currLen); 
    return maxLen;
};