function maxArea(height: number[]): number {
 
  let len = height.length;
  let left =0;
  let right = len -1;

  let maxWater =0;

  while( left < right ){
    let ht = Math.min(height[right] , height[left]);
    let width = right -left;
    let area = ht * width;

    maxWater = Math.max(maxWater , area);
    if( height[left]<height[right] ){
        left++;
    }else{
        right --;
    }


  }

  return maxWater;

};