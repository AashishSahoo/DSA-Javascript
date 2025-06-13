/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let c0=0;
    let c1=0;
    let c2=0;
    for(let i=0;i<nums.length;i++){
            if( nums[i] === 0){
                c0++;
            }else if(nums[i] === 1){
                c1++;
            }else{
                c2++;
            }
    }
for( let i=0;i<nums.length;i++){
    if(i< c0){
        nums[i]=0;
    }else if(i<c0+c1){
        nums[i]=1;
    }else{
        nums[i]=2;
    }
}
};