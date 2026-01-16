function maxProfit(prices: number[]): number {
    let profit=0;


    let min=prices[0];
    let max=prices[0];


    for(let i=1;i<prices.length;i++){
        if(prices[i-1]<prices[i]){
            profit+= prices[i]-prices[i-1];
        } else if( prices[i-1]> prices[i]){
            min =prices[i];
            max=prices[i];
        }
    }
    return profit;


};