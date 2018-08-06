/**
 * 
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let profit = 0;
    let bought = false;
    
    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        if (!bought) {
            if (i < prices.length - 1 && prices[i+1] > prices[i]) {
                bought = true;
                profit = profit - prices[i];
            } 
        } else {
            if (i === prices.length - 1) {
                bought = false;
                profit = profit + prices[i];
            } else if (i < prices.length - 1 && (prices[i+1] < prices[i])) {
                bought = false;
                profit = profit + prices[i];
            }
        }
    }
    return profit;
    
};