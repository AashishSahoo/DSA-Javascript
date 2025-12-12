function maxProfit(prices: number[]): number {

let profit =0;
let min= prices[0];
let max=prices[0];

let sum=0;
for(let i=1;i<prices.length;i++){
     if(prices[i]<min){
        min=prices[i];
        max=prices[i];
     }else{
        max=prices[i];
        sum = max-min;
     }
     profit = Math.max(sum,profit);
}
return profit;


};