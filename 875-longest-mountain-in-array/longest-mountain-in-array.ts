function longestMountain(arr: number[]): number {

    let n=arr.length;
    if(n<3) return 0;

    let longest =0;
    let i=1;

    while(i<n-1){

        if(arr[i-1] < arr[i] && arr[i]>arr[i+1]){
            let left =i-1;
            while( left>0 && arr[left -1] <arr[left]){
                left--;
            }

            let right = i+1;
            while(right < n-1 && arr[right] > arr[right+1]){
                right++;
            }

            const length = right -left +1;
            longest = Math.max(longest , length);

            i=right;
        }else{
            i++;
        }
    }
    return longest;

 
};