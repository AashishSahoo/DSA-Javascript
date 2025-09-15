function maxProfit(prices: number[]): number {

let res=0 ;
let max = prices[0];
let min = prices[0];

for(let i=0; i<prices.length; i++){
    if( prices[i] < min ){
        min = prices[i];
        max = prices[i];

    }
    else if( prices[i] > max){
        max = prices[i];

    }
    let sum = max -min;
    res = Math.max ( sum , res);
}
return res;

// let max = prices[0];
// let sum =0;
// for( let i=0;i< prices.length-1 ;i++){
//      if ( sum < 0){
//         sum=0;
//      }
//      sum = max - prices[i];
//      max = Math.max(max , sum);
// }

// return max;











//     let maxProfit :number=0;
//     let buyDay =  0;
//     let sellDay  = 1;
    
//     for( let i=0;i< prices.length ;i++){
//         for( let j=i ;j<prices.length ;j++){
//              let profit = prices[j] - prices[i];
//               maxProfit = Math.max( profit , maxProfit);
//         }
//     }

// return maxProfit;

}
