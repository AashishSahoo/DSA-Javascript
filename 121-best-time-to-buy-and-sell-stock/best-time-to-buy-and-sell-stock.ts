function maxProfit(prices: number[]): number {
  

 let maxProfit = 0;
 let minPrice = prices[0];
  for( let i=0; i< prices.length ;i++){
    let profit = prices[i]-minPrice;
    maxProfit = Math.max( maxProfit , profit);
    minPrice = Math.min(minPrice , prices[i]);
  }

  return maxProfit;

};