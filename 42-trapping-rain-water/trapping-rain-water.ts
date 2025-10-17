
function trap(height: number[]): number {

   let left=0;
   let right = height.length-1;
   let leftmax= 0;
   let rightmax= 0;
   let res=0;

   for(let i=0;i<height.length;i++){

    leftmax= Math.max( leftmax , height[left]);
    rightmax= Math.max( rightmax , height[right]);

    
      if( height[left] < height[right] ){
           res += leftmax - height[left];
           left++;
      }
      else{
           res += rightmax - height[right];
           right--;
      }
      

   }
       return res;


};