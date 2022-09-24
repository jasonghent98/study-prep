function numTrees(n: number): number {
    if (n <= 1) return n
    // init our dp array
    const dp = new Array(n).fill(1)
    for (let i: number = 2; i <= n; i++) {
        let total: number = 0
        // consider each number from 1 to i as the root
        for (let root: number = 1; root <= i; root++) {
            // compute the total number of nodes to the left of root and to the right
            const left = root - 1
            const right = i - root
            total += dp[left] * dp[right]
        }
        // set our curr i value to the total we found, considering all numbers as roots
        dp[i] = total
    }
    return dp[n]
};