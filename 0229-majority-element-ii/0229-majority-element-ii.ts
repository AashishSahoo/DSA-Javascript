function majorityElement(nums: number[]): number[] {
    
    let mp=new Map<number ,number>();
    let res:number[]=[];

    for( let i=0;i<nums.length ;i++){
        mp.set(nums[i],   (mp.get(nums[i]) || 0)+1);
    }

    for( let [key ,value] of mp){
          if(value> (nums.length/3)){
            res.push(key);
          }
    }

    return res;
};