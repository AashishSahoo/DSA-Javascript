function increasingTriplet(nums: number[]): boolean {
    // for( let i=0 ;i< nums.length -2;i++){
    //     for( let j=i+1 ;j<nums.length -1 ;j++){
    //         for( let k=j+1 ;k<nums.length ;k++){
    //             if( nums[i] < nums[j] && nums[j] < nums[k] ){
    //                 return true;
    //             }
    //         }
    //     }
    // }
    // return false;

    let i=Infinity;
    let j = Infinity;

    for( let index=0;index<nums.length;index++){
        if(nums[index]<=i){
            i=nums[index];
        }else if( nums[index]<=j){
            j=nums[index];
        }else {
            return true;
        }
    }
    return false;
};