function subarraySum(nums: number[], k: number): number {

 let cnt = 0;
 let n = nums.length;

 for(let i=0; i<n; i++){

    let sum = 0;

    for(let j=i; j<n; j++){

       sum += nums[j];

       if(sum === k){
         cnt++;
       }
    }
 }

 return cnt;
}