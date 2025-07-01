function average(salary: number[]): number {
     
    let min=salary[0];
    let max=salary[0];
    let sum=0;
    let len = salary.length ;
    for( let i=0;i< len ;i++){
        min = Math.min(min , salary[i]);
        max = Math.max(max , salary[i]);
        sum += salary[i]; 
    }

    sum = sum - (max+min);
    

     return len >2 ? sum/(len-2):0;
};