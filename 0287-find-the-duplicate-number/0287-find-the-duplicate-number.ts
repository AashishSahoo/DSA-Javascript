function findDuplicate(nums: number[]): number {
    // let mp = new Map<number , number>();
    // for( let i=0;i< nums.length ;i++){
    //     mp.set(nums[i] , (mp.get(nums[i])|| 0 ) +1);
    // }

    // for( let [key ,value] of mp){
    //     if( value >1) return key
    // }

    let uniquesSet = new Set<number>();
    for( let i=0;i< nums.length ;i++){
        if(uniquesSet.has(nums[i]))return nums[i];
        else uniquesSet.add(nums[i]);
    }
};