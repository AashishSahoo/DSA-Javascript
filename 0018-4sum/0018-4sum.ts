function fourSum(nums: number[], target: number): number[][] {
  let res:number[][]=[];

  nums=nums.sort((a,b)=> a-b);

  if(nums.length<4){
    return [];
  }

   for( let i=0;i<nums.length ;i++){
      if( nums[i]===nums[i-1] && i>0 ) continue;

    for( let j=i+1 ;j<nums.length;j++){
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; 

        let p=j+1;
        let q=nums.length-1;

        while(p<q){

            let sum = nums[i]+nums[j]+nums[p]+nums[q];
            let temp = [nums[i],nums[j],nums[p],nums[q]];
        
            if(sum === target  ){
                res.push(temp);
                p++;
                q--;
                while(nums[p]===nums[p-1] && p<q){
                    p++;
                }
                 while(nums[q]===nums[q-1] && p<q){
                    q--;
                }
            }else if(  sum < target){
               p++;
            }else{
                q--;
            }
        }
        
        
    }
   }
   
   return res;
}
