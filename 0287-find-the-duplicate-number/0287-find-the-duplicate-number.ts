function findDuplicate(nums: number[]): number {
    let s1=new Set([]);

    for( let i=0;i<nums.length;i++){
        if(!s1.has(nums[i])){
            s1.add(nums[i]);
        }else{
            return nums[i];
        }
    }

    return null;
};