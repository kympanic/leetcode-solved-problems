/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //keep track of the best buy day so far
    //keep track of the largest difference so far
    let profit = 0;
    let min = prices[0]
    for(let i = 1; i < prices.length;i++){
        min = Math.min(prices[i],min)
        profit= Math.max(profit, prices[i]- min)
    }
    return profit
};
  