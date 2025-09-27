function majorityElement(nums: number[]): number[] {
   let n=nums.length;
   let mp = new Map<number,number>();
   let result:number[]=[]
   for( let i=0;i<n;i++){
    mp.set( nums[i] , (mp.get(nums[i]) || 0)+1);
   }

   for( let [key,val] of mp){
    if( val> (n/3)){
        result.push(key);
    }
   }
   return result;
};