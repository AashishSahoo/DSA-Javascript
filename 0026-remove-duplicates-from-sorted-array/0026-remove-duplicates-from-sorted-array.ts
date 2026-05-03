function removeDuplicates(nums: number[]): number {
     if (nums.length === 0) {
        return 0;
    }

    let res=1;

    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[i-1]){
            nums[res]=nums[i];
            res++;
        }
    }
    return res;

    // let j = 0; // Pointer for the position of unique elements
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[j] !== nums[i]) {
    //         j++;
    //         nums[j] = nums[i]; // Move the unique element to the next position
    //     }
    // }
    // return j + 1;
};