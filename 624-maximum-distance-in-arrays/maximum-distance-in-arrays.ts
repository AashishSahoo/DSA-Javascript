function maxDistance(arrays: number[][]): number {
    let res=0;
    let minVal = arrays[0][0];
    let maxVal= arrays[0][arrays[0].length-1];

    
    for( let i=1;i<arrays.length;i++){

        let currMin = arrays[i][0];
        let currMax = arrays[i][arrays[i].length - 1];

        res= Math.max( res , Math.abs(currMax-minVal),
                             Math.abs(maxVal-currMin) );

        minVal=Math.min(minVal,currMin);
        maxVal=Math.max(maxVal,currMax);                     

    }

    return res;
};