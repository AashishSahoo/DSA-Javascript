function validMountainArray(arr: number[]): boolean {
  if(arr.length <3)return false;


   let i=0;
   let j=arr.length-1;

   while(i<arr.length-1 && arr[i]<arr[i+1]){
    i++;
   }

   while(j>0 && arr[j-1]>arr[j]){
    j--;
   }

   if(i===j && i<arr.length-1 && i>0){
    return true;
   }

   return false;

};