function fourSum(nums: number[], target: number): number[][] {
  let res:number[][]=[];
  nums=nums.sort((a,b)=> a-b);

  for(let i=0;i<nums.length-1;i++){
    if(i>0 && nums[i]=== nums[i-1]) continue;
    for(let j=i+1;j<nums.length;j++){
        if(j>i+1 && nums[j]===nums[j-1]) continue;
        let start = j+1;
        let end = nums.length-1;

        while( start<end){
            let sum = nums[i] + nums[j] + nums[start] + nums[end] ;
            if(sum === target){
                res.push([nums[i] , nums[j] ,nums[start] , nums[end]]);
                start++;
                end--;

                while(start<end && nums[start]=== nums[start-1])start++;
            }else if( sum < target){
                start++;
            }else{
                end--;
            }
        }
    }
  }
  return res;
}
