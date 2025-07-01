function maximumCount(nums: number[]): number {

    let pos=0;
    let neg=0;

    for( let i=0;i< nums.length ;i++){
        if(nums[i]>0){
            pos++;
        }else if( nums[i]< 0){
            neg++;
        }
    }
    return Math.max(pos, neg);
};