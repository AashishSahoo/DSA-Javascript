function fib(n: number): number {

if( n===0) return 0;
if( n===1) return 1;
let a=0;
let b=1;

for(let i=2;i<=n ;i++){
    let c= a+b;
    a=b;
    b=c;
    if(i ===  n){

        return c;
    }
}


};
























