function fourSum(nums: number[], target: number): number[][] {
  if( nums.length < 4)return [];
   nums = nums.sort((a,b)=> a-b);
  let res : number [][]=[];

  for( let i=0;i<nums.length -3 ;i++){
    if( i>0 && nums[i] === nums[i-1]) continue;
    for(  let j=i+1 ;j< nums.length -2;j++ ){
        if (j > i + 1 && nums[j] === nums[j - 1]) continue;

        let p = j+1;
        let q= nums.length -1;

        while( p<q){
            
            let sum = nums[i] + nums[j] + nums[p] + nums[q] ;
            if( sum < target){
                p++;
            }else if( sum > target ){
                q--;
            }else if( sum === target){
                res.push([nums[i] , nums[j] , nums[p] , nums[q]]);
                while (p<q && nums[p] === nums[p+1]){p++};
                while (p<q && nums[q] === nums[q-1]){q--};
                p++;
                q--;
            }
        }
        
    }
  } 
  return res;
}
