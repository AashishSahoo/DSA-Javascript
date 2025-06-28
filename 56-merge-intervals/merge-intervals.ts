function merge(intervals: number[][]): number[][] {
   if( !intervals.length) return [];
   intervals =intervals.sort((a,b)=> a[0]-b[0]);

   let result:number [][]=[intervals[0]];

   for( let i=0;i< intervals.length;i++){
    let [currentStart , currentEnd]= intervals[i];
    let intervalToCompare = result[result.length-1];


    if( currentStart <= intervalToCompare[1] ){
        intervalToCompare[1] = Math.max(intervalToCompare[1] , currentEnd);
    }else{
        result.push([currentStart, currentEnd]);
    }

   }
   return result;
}
