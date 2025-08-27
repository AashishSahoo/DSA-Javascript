function construct2DArray(original: number[], m: number, n: number): number[][] {
    if(m*n !== original.length) return [];
    let res:number[][]=[];

    for( let i=0;i<original.length ;i+=n){
        let arr:number[]= original.slice(i,i+n);
        res.push(arr);
    }
    return res;
};