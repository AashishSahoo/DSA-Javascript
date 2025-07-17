function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let missingNumber:number = -1;
    let repatedNumber :number = -1;
    let mySet = new Set<number>();

    for( let i=0;i<grid.length ;i++){
        for( let j=0;j<grid[i].length;j++){
            const val= grid[i][j];
            if(mySet.has(val)){
               repatedNumber = val; 
            }else{
                mySet.add(val);
            }
        }
    }

    for( let i=1 ;i<=mySet.size * mySet.size ;i++){
        if( !mySet.has(i)){
         missingNumber= i; 
         break;  
        }
    }

    return [repatedNumber , missingNumber];
};