function maxProfit(prices: number[]): number {

 let min = prices[0];
 let max = prices[0];
 let profit =0;

 for(let i=0;i<prices.length;i++){
    if(prices[i]<min){
        min= prices[i];
        max=min;
    }else if(max<prices[i]){
        max =prices[i];
    }
    let sum = max-min;
    profit=Math.max(profit,sum);
 }
 return profit;


};