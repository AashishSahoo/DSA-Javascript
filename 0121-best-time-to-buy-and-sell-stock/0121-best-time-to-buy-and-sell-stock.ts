function maxProfit(prices: number[]): number {

   let maxProfit =0;
   let minProfit= prices[0];

   for(let i=0;i< prices.length ;i++){
    minProfit = Math.min(minProfit,prices[i]);
    let max = prices[i] - minProfit;
    maxProfit=Math.max(maxProfit , max);
   }
   return maxProfit;
};