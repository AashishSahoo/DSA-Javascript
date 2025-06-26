/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let m:number[]=[]
    let  n:number[]=[] ;
    for( let i=0;i< matrix.length ;i++){
        for ( let j=0;j<matrix[0].length ;j++){
            if(matrix[i][j] === 0){
                m.push(i);
                n.push(j);
            }
        }
    }
     for( let i=0;i< matrix.length ;i++){
        for ( let j=0;j<matrix[0].length ;j++){
            if( m.includes(i) || n.includes(j)){
                matrix[i][j]=0;
            }
        }
    }
};