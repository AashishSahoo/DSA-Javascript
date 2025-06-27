function maxProfit(prices: number[]): number {
  
    let maxProfit = 0;
    let minPrice = prices[0];

  for( let i=1; i< prices.length ;i++){
        minPrice = Math.min(minPrice , prices[i]);
        let profit = prices[i]-minPrice;
        maxProfit = Math.max( maxProfit , profit);
    }

  return maxProfit;

};

