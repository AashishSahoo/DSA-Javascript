function findMissingAndRepeatedValues(grid: number[][]): number[] {

let missingNumber:number ;
let repatedNumber : number;
let total = grid.length * grid.length;

let mp = new Map<number , number>();
for(let i=0;i< grid.length;i++){
    for( let j=0;j<grid[i].length ;j++){
        mp.set(grid[i][j], (mp.get(grid[i][j]) ?? 0) + 1);

    }
}

for( let i=1;i<= total ;i++){
    let val = mp.get(i) ?? 0;
     if(val === 0){
        missingNumber = i;
     }
     else if(val === 2){
        repatedNumber = i;
     }

}

return [repatedNumber,missingNumber];


};