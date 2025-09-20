function maxProfit(prices: number[]): number {


    let res = 0;
    let minPrice = prices[0];

    for( let i=1; i< prices.length ;i++){
         res = Math.max ( (prices[i] - minPrice) , res);
         minPrice = Math.min(prices[i] , minPrice) ;
    }
   return res;
// let res=0 ;
// let max = prices[0];
// let min = prices[0];

// for(let i=0; i<prices.length; i++){
//     if( prices[i] < min ){
//         min = prices[i];
//         max = prices[i];
//     }
//     else if( prices[i] > max){
//         max = prices[i];
//     }
//     let sum = max -min;
//     res = Math.max ( sum , res);
// }
// return res;


}
