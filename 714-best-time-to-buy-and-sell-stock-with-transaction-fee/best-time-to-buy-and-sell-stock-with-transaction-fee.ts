function maxProfit(prices: number[], fee: number): number {
  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    else if (prices[i] > buy + fee) {
      profit += prices[i] - buy - fee;
      buy = prices[i] - fee;
    }
  }
  return profit;
}
