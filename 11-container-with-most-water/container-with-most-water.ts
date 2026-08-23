function maxArea(height: number[]): number {
  let left =0;
  let right = height.length-1;

  let res=0;

  while(left<right){

    let width = right-left;
    let ht = Math.min(height[left],height[right]);
    let area = ht*width;

    res= Math.max(area , res);

    if(height[left]<height[right]){
        left++;
    }else {
        right--;
    }


  }
  return res;
};