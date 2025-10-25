function stoneGame(piles: number[]): boolean {
    let alice:number[] =[];
    let bob:number[] =[];
    let i=0;
    piles = piles.sort((a,b)=> a-b);

   while(piles.length>0){
      if(i%2!==0){
        let max =piles[0];
        piles.shift();
        alice.push(max);
        i++;

      }else{
        let max =piles[0];
        piles.shift();
        bob.push(max);
        i++;
        
      }
   }
   let aliceTot = alice.reduce( (sum,item) =>sum+=item  , 0);
   let bobTot = bob.reduce( (sum,item) =>sum+=item  , 0);

    return (aliceTot > bobTot) ? true : false;

};