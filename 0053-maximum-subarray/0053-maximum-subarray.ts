function maxSubArray(nums: number[]): number {

let res=-Infinity;
let sum=0;

for( let i=0;i<nums.length ;i++){
    if(sum <0){
        sum =0;
    }
    sum += nums[i];
    res = Math.max( res,sum);
}
return res;

};
