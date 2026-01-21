function maxArea(height: number[]): number {
    let n= height.length-1;


    let left =0;
    let right = n;

   let res=0;
   

    while(left <right){

        let ht= Math.min(height[left],height[right]);
        let width = right-left;
        let area= ht*width;
        res= Math.max(res,area);        
        if( height[left] < height[right] )left++;
        else right --;


    }

    return res;
    
};