function lastStoneWeight(stones: number[]): number {

while(stones.length>1){

   stones.sort((a,b)=> b-a);

   const mx1 = stones.shift();
   const mx2 = stones.shift();

   if(mx1 !== mx2){
    stones.push(mx1-mx2);
   }
}
return stones[0] || 0;

};