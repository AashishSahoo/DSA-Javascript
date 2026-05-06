function moveZeroes(nums: number[]): void {
    let j=0;
    let i=0;

    for( i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[j]=nums[i];
            j++;
        }
    }
    while(j<i){
        nums[j]=0;
        j++;
    }
};