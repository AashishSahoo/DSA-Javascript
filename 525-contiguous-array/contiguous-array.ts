function findMaxLength(nums: number[]): number {
    let mp= new Map<number,number>();


    let maxLen =0;
       let sum  =0;

    for(let i=0;i<nums.length;i++){

       if(nums[i]===0){
        nums[i]=-1;
       }
       sum += nums[i];

       if(sum === 0){
        maxLen = i+1;
       }else if(mp.has(sum)){
        maxLen= Math.max(maxLen , i-(mp.get(sum)));
       }else{
        mp.set(sum ,i)
       }
    }
    return maxLen;

};