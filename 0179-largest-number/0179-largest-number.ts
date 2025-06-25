function largestNumber(nums: number[]): string {

    if( nums.every(i => i === 0)) return "0";
    const strNums  = nums.map((i) => i.toString())
               .sort((a,b)=> {
                 if(a+b > b+a) return -1;
                   return 1;
                });
       return strNums.join("");          
};