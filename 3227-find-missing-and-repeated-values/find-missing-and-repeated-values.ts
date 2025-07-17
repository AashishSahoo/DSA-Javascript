// function findMissingAndRepeatedValues(grid: number[][]): number[] {
//     let missingNumber:number = -1;
//     let repatedNumber :number = -1;
//     // let map:number =new Map<number ,number>();
//     let mySet = new Set<number>();

//     for( let i=0;i<grid.length ;i++){
//         for( let j=0;j<grid[i].length;j++){
//             const val= grid[i][j];
//             if(mySet.has(val)){
//                repatedNumber = val; 
//             }else{
//                 mySet.add(val);
//             }
//         }
//     }

//     return [missingNumber];
// };

function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let repeatedNumber: number = -1;
    let missingNumber: number = -1;

    const mySet = new Set<number>();
    const n = grid.length;
    const total = n * n;

    // Step 1: Find repeated number
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const val = grid[i][j];
            if (mySet.has(val)) {
                repeatedNumber = val;
            } else {
                mySet.add(val);
            }
        }
    }

    // Step 2: Find missing number from 1 to n^2
    for (let i = 1; i <= total; i++) {
        if (!mySet.has(i)) {
            missingNumber = i;
            break;
        }
    }

    return [repeatedNumber, missingNumber];
}
