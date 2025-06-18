function maxArea(height: number[]): number {
     let right =height.length-1;
     let left = 0;


     let width =0 ;
     let result =0  ;


     while( left < right ){
        width = right - left ;
        let ht = Math.min(height[left] ,height[right]);
        let area = ht * width;
        result = Math.max(area , result);

        if(height[left] < height[right]){
            left++;
        }else{
            right --;
        }
      
     }

     return result;
     
};