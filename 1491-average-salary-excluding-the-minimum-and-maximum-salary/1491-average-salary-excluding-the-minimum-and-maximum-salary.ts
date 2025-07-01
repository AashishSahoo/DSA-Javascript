function average(salary: number[]): number {
     
    let min=Math.min(...salary);
    let max=Math.max(...salary);
    let len = salary.length ;
     let sum = sum.reduce((curr)=> sum+curr  , 0)
    sum = sum - (max+min);
     return len >2 ? sum/(len-2):0;
};