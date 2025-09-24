function maxProfit(prices: number[]): number {

 let res=0;
 let min=prices[0];
 let max = prices[0];

 for( let i=0;i<prices.length ;i++){
    if(prices[i] <min){
        min = prices[i];
        max = prices[i];
    }else if ( max < prices[i]){
        max = prices[i];
    }
    let sum = max-min;
    res = Math.max( res,sum);
 }
 return res;

}
