function maxArea(height: number[]): number {
 

   let left =0;
   let right = height.length -1;

   let leftMax =height[0];
   let rightMax = height[right];
   let res = 0;
   let width =0;
   let ht =0;

   while( left < right ){
     leftMax = Math.max(leftMax , height[left]);
     rightMax = Math.max(rightMax , height[right]);

      width = right -left;
       ht = Math.min( leftMax , rightMax);
       res = Math.max( res, width*ht);

     if( height[left] < height[right]){

         left++;
     }else{
        right --;
     }

   }
   return res;

};