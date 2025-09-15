function fib(n: number): number {

    if(n === 0) return 0;
    if(n === 1) return 1;

    let a = 0;
    let b = 1;
    let sum =a+b;

    for( let i=0;i< n-2;i++){
    
       let c= a+b;
       sum = c+b;
       a=b;
       b=c;

    }
   return sum
};
























