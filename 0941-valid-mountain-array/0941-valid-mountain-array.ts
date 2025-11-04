function validMountainArray(arr: number[]): boolean {

   let n = arr.length;
   if(n<3) return false;
   let i=1;

   while (i<n-1){
        let left =i-1
        let right =i+1

    
    if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
        while(left >=0 && arr[left-1]< arr[left]){
            left--;
        }

        while(right <n && arr[right+1]< arr[right]){
            right++;
        }
        
        return left===0 && right === n-1;
    }else{
        i++;
    }

   

   }

   return true;
};