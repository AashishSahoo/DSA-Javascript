function sumOfUnique(nums: number[]): number {
    let mp = new Map();
    let sum=0;
    for( let i=0;i< nums.length ;i++){
        mp.set( nums[i]  , (mp.get(nums[i]) || 0) + 1);
    }

    for( let [key,val] of mp){
        if( val === 1){
           sum+= key;
        }
    }
    return sum;
};