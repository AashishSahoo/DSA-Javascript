// function trap(height: number[]): number {
//     // let left = 0, right = height.length-1, result = 0;

//     // while(left<right){
//     //     let width = right -left;
//     //     const  ht = Math.min(height[left],height[right]);
//     //     let area = width *ht;
//     //     result= Math.max(result,area);


//     //     if(height[left] < height[right]){
//     //         left++;
//     //     }else{
//     //         right--;
//     //     }

//     // }
//     // return result;
 
// };

function trap(height: number[]): number {
    if (!height || height.length === 0) {
        return 0;
    }
    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l];
    let rightMax = height[r];
    let res = 0;
    while (l < r) {
        if (leftMax < rightMax) {
            l++;
            leftMax = Math.max(leftMax, height[l]);
            res += leftMax - height[l];
        } else {
            r--;
            rightMax = Math.max(rightMax, height[r]);
            res += rightMax - height[r];
        }
    }
    return res;
};