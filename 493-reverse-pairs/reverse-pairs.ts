function reversePairs(nums: number[]): number {
   return  mergeSort(nums, 0 ,nums.length-1);
};


function mergeSort(nums ,start,end) :number{

    if(start>=end) return 0;
    let mid = Math.floor( (start+end)/2) ;

    let count = mergeSort(nums,start,mid) + mergeSort(nums,mid+1,end);

    count += merge(nums,start,mid,end);
    return count;

}


function merge(nums ,start,mid,end ){

    let count =0;
    let i=start;
    let j=mid+1;

    for(let k=start;k<=mid;k++){
        while(j<=end && nums[k] >2*nums[j]){
            j++;
        }

        count+= (j - (mid+1));
    }

    let temp:number[]=[];
    j = mid + 1;


    while(i<=mid && j<=end){
        if(nums[i]<=nums[j]){
            temp.push(nums[i++]);
        }
        else{
             temp.push(nums[j++]);
        }
    }

    while(i<=mid){
        temp.push(nums[i++]);
    }

    
    while(j<=end){
        temp.push(nums[j++]);
    }
     
    let index=start;
    for(let q=0;q<temp.length;q++){
          nums[index]=temp[q];
          index++;
    }
   return count;
}