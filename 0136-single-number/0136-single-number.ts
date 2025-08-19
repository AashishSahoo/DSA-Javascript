function singleNumber(nums: number[]): number {
  
  let mp = new Map<number  , number>();

  for( let i=0;i<nums.length ;i++){
       mp.set( nums[i]  , (mp.get(nums[i]) ?? 0) +1);
  }

  for( let [key,val] of mp){
    if(val ===1){
        return key;
    }
  }


};