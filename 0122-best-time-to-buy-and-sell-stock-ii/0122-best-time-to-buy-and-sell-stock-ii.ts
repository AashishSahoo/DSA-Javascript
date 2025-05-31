function maxProfit(prices: number[]): number {

let max=0;
    for(let i=0;i< prices.length-1;i++){
        let profit =prices[i+1]-prices[i];
       if(profit >0){
         max+=profit
       }
    }
    return max;
};