function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let cnt=0;
 
    let mp = new Map();

    for( let i=0;i<nums1.length;i++){
      for( let j=0;j<nums2.length;j++){
          let sum= nums1[i]+nums2[j];

          mp.set( sum , (mp.get(sum)||0) +1);
      }   
    }

    
    for( let i=0;i<nums3.length;i++){
      for( let j=0;j<nums4.length;j++){
          let sum= nums3[i]+nums4[j];
          
          if(mp.has(-sum)){
            cnt+= mp.get(-sum);
          }
      }   
    }


return cnt;

};