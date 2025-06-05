function tribonacci(n: number): number {

if(n===0)return 0;
if(n===1)return 1;
if(n===2)return 1;

 let a=0;
    let b=1;
    let c=a+b;
for(let i=3 ;i<=n;i++){
   
    let d=c+b+a;
    if(i===n){
        return d;
    }
    a=b;
    b=c;
    c=d;
}


};