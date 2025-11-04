function peakIndexInMountainArray(arr: number[]): number {
    // let mp = new Map();

    // for( let i=0;i<arr.length ;i++){
    //     mp.set( arr[i] , (mp.get(arr[i])||0)+1 );
    // }


    let idx=null;
    let max=arr[0];

    for( let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
            idx=i;
        }
    }
    return idx;
};