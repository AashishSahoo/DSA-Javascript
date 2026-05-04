function maxProfit(prices: number[]): number {

   let min = prices[0];
   let max = prices[0];
   let profit =0;
   for(let i=1;i< prices.length;i++){
    if(min > prices[i]){
        min= prices[i];
        max = min;
    }else{
        max =  prices[i];
        let sum = max-min;
        profit = Math.max(profit ,sum);
    }
   }
   return profit;

};