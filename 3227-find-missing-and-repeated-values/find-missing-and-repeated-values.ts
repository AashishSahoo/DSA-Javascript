function findMissingAndRepeatedValues(grid: number[][]): number[] {

  let missing =-1;
  let twice =-1;
  let n= grid.length;
  let mp = new Map<number ,number>();

  for(let i=0;i<grid.length ;i++){
    for( let j=0;j<grid[i].length ;j++){
          mp.set( grid[i][j] , (mp.get(grid[i][j]) ||0) +1  );
    }
  }

    for( let k =1;k<=n*n ;k++){
        let freq= mp.get(k) ?? 0;
        if(freq >1){
            twice = k;
        }
        else if( freq === 0){
            missing = k;
        }
    }
  
return [ twice,missing ]


};

