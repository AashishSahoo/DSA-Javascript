function maxArea(height: number[]): number {
    let left = 0, right = height.length-1, result = 0;

    while(left<right){
        let width = right -left;
        const  ht = Math.min(height[left],height[right]);
        let area = width *ht;
        result= Math.max(result,area);


        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }

    }
    return result;
 
};