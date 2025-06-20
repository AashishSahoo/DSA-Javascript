function searchRange(nums: number[], target: number): number[] {
    // if(!nums) return [-1,-1];
    // if( nums.length ===1) {
    //     if( nums[0] === target) return [0,0];
    //     else return [-1,-1];
    // }
    // for( let i=0; i< nums.length -1 ;i++){
    //     if(nums[i] ===  nums[i+1] && nums[i] === target) return [i,i+1]
    // }
    // return [-1,-1];
    let first =-1;
    let last =-1;
    for( let i=0;i< nums.length ;i++){
         if( nums[i] === target){
            if( first === -1){
                first =i;
            }
            last=i;
         }
    }
    return [first , last];
};