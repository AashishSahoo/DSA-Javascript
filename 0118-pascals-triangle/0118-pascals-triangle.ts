function generate(numRows: number): number[][] {

let res:number[][]=[];

for( let i=0;i< numRows;i++){
    res[i] =[]
    for( let j=0;j<=i;j++){
        if( j===0 || j===i){
            res[i][j]=1;
        }else{
            res[i][j] = res[i-1][j-1] + res[i-1][j];
        }
    }
}
   return res;

};

