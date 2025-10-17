function removeDuplicates(nums: number[]): number {

    if(nums.length === 0) return 0;
    let i=0;

    for(let k=1;k<nums.length;k++){
        if(nums[k]!==nums[i]){
            i++;
            nums[i]=nums[k];
        }
    }
    return i+1;
}
