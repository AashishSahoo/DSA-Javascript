function sortArray(nums: number[]): number[] {
        mergeSort(nums , 0 ,nums.length-1);
        return  nums;
};


function mergeSort(nums:number[], start:number ,end:number){

  if( start>=end) return;

  let mid = Math.floor((start+end) /2);
  mergeSort(nums,start ,mid);
  mergeSort(nums,mid+1 ,end);
  merge(nums, start ,mid,end);

}

function merge(nums:number[],start:number,mid:number,end:number){
  
  let temp:number[]=[];
  let i=start;
  let j=mid+1;

  while(i<=mid && j <=end){
    if(nums[i]<nums[j]){
        temp.push(nums[i]);
        i++;
    }else{
        temp.push(nums[j]);
        j++;
    }
  }

  while(i<=mid){
    temp.push(nums[i]);

    i++;
  }

  while(j<=end){
        temp.push(nums[j]);
    j++;
  }

  let index=start;
  for(let k=0;k<temp.length;k++){
       nums[index]= temp[k];
       index++;
  }

}
