function maxProfit(prices: number[], fee: number): number {
    
let cash =0;
let hold=-prices[0];

for(let i=0;i<prices.length;i++){
    cash = Math.max( cash , hold + prices[i] - fee);//sell
    hold = Math.max(hold, cash -prices[i]);//buy
}
return cash;
    
};