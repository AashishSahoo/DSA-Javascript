function merge(intervals: number[][]): number[][] {

   intervals.sort((a,b) => a[0] -b[0]);
   let merged = [];
   let prev = intervals[0];

   for(let i=1;i<intervals.length ;i++){
      if(intervals[i][0] <= prev[1]){
            prev[1] = Math.max( prev[1] , intervals[i][1]);
       }else{
            merged.push(prev);
            prev = intervals[i];
        }
    }
   merged.push(prev);
   return merged;

}
