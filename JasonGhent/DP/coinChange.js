/* 
You are given an integer array coins representing coins of different denominations and an integer amount representing a 
total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by 
any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.


APPROACH:
bottom-up dynamic programming approach: we can solve the smallest subproblem possible and build the larger solution based on it


init a dp array:
the indices (keys) will refer to the current amount, ranging from 0 to amount (amount + 1 indices)
the values will refer to the min number of coins required for that given amount


init the min number of coins required to amount + 1, except for the base case dp[0] = 0

solve the problem with bottom-up dp, 

if at the end, dp[amount] === amount + 1, return -1 because there was no way to generate that amount given our coins, otherwise
return the amount

TIME: O(C * A), where we need to consider the min # of coins required for all the amounts for each coin
SPACE: O(A), where we are computing the min number of coins for each amount, given all of the coins available (1 dimensional array)

*/


const coinChange = (amount, coins) => {
    const dp = []; // store cached results
    // init all num coins required to amount + 1 for each amount within range 0 - amount
    for (let i = 0; i <= amount; i++) dp[i] = amount + 1;
    // base case: if our amount is 0, we dont need any coins to sum to it
    dp[0] = 0;
    // use dp to solve the larger problem of amount, considering all coins for each amount
    for (let i = 0; i < coins.length; i++) {
        for (let a = 1; a <= amount; a++) {
            if (a - coins[i] >= 0) {
                dp[a] = Math.min(dp[a], 1 + dp[a - coins[i]]);
            }
        }
    }
    return dp[amount] === amount+1 ? -1 : dp[amount];
}

console.log(coinChange(15, [3,2,5,7])) // 3
console.log(coinChange(22, [3,2,5,7,9])) // 4¡