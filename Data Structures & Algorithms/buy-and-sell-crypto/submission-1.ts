class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let price = prices[0];
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            let todayPrice = prices[i]
            profit = Math.max(profit, todayPrice - price)
            price = Math.min(todayPrice, price)
        }
        
        return profit;
    }
}
