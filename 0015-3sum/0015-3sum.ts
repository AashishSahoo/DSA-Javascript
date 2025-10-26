function threeSum(nums: number[]): number[][] {
   
   let res:number[][]=[];
   if(nums.length <3)return [];
   
   nums=nums.sort((a,b)=> a-b);

   for(let i=0;i<nums.length-2;i++){
     if( i>0 && nums[i]===nums[i-1]) continue;

         let p=i+1;
         let q=nums.length-1;

         while(p<q){
            let sum = nums[i]+nums[p]+nums[q];
                    
            if(sum === 0){
                let temp:number[] =[nums[i],nums[p],nums[q]];
                res.push(temp);
                p++;
                q--;

                 while( p<q && nums[p]===nums[p-1]){
                p++;
            }

            while( p<q && nums[q]===nums[q+1]){
                q--;
            }
               
            }
            else if(sum < 0){
                 p++;
            }
            else{
                q--;
            }
         
         }
   }
   return res;
};