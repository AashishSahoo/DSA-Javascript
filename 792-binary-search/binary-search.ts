function search(nums: number[], target: number): number {
    
let i=0;
let j=nums.length-1;

while(i<=j){
    let mid =Math.floor((i+j)/2) ;

    if(nums[mid]>target){
        j =mid-1;
    }else if (nums[mid]<target){
        i=mid + 1;
    }else {
        return mid;
    }

}
return -1;

};