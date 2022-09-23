const solveKnapsack = (profits, weights, capacity) => {
    if (capacity <= 0 || profits.length === 0 || profits.length != weights.length) return 0;
    // init DP matrix to store profits
    const dp = new Array(profits.length).fill(0).map(() => new Array(capacity + 1).fill(0));
    // 
    for (let row = 0; row < profits.length; row++) dp[row][0] = 0; // capacity of 0 will be no profit
    // if we only have one object, we can take if it fits within the current capacity
    for (let c = 0; c <= capacity; c++) { 
        if (weights[0] <= c) dp[0][c] = profits[0];
    }

    for (let row = 1; row < profits.length; row++) {
        for (let c = 1; c <= capacity; c++) {
            // profits to be updated. two possibilities for each number
            let profit1 = 0, profit2 = 0;
            // if current weight is within the current capacity.. we can take the current profit + the profit of remainder
            if (weights[row] <= c) profit1 = profits[row] + dp[row-1][c-weights[row]];
            // alternative would be just to take the profit of the previous object at the same capacity
            profit2 = dp[row-1][c];
            // by always taking the max profit for each object, we ensure that we have optimal substructure and we will solve the larger overall problem
            dp[row][c] = Math.max(profit1, profit2);
        }
    }
    return dp[profits.length - 1][capacity];
}

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`); // 22
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`); // 16