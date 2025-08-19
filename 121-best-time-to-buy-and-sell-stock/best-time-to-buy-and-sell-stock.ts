function maxProfit(prices: number[]): number {

    let minPrice = prices[0];
    let maxProfit = 0;

    for( let i=1;i<prices.length;i++){
        const profit = prices[i] - minPrice;
         maxProfit = Math.max(maxProfit , profit);
         minPrice = Math.min( minPrice , prices[i]);
    }
    return maxProfit;

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
