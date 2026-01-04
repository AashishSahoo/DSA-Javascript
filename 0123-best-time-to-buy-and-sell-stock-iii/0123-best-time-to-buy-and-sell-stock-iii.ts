function maxProfit(prices) {
  const memo = {};
  return profitCal(0, 0, prices, 2);

  function profitCal(i, buyOrSell, prices, k) {
    if (i >= prices.length || k === 0) return 0;

    const key = i + "-" + buyOrSell + "-" + k;
    if (memo[key] !== undefined) return memo[key];

    let profit;
    if (buyOrSell === 0) {
      const buy = profitCal(i + 1, 1, prices, k) - prices[i];
      const noBuy = profitCal(i + 1, 0, prices, k);
      profit = Math.max(buy, noBuy);
    } else {
      const sell = profitCal(i + 1, 0, prices, k - 1) + prices[i];
      const noSell = profitCal(i + 1, 1, prices, k);
      profit = Math.max(sell, noSell);
    }

    memo[key] = profit;
    return profit;
  }
}
