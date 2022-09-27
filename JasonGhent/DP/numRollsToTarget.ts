const numRollsToTarget = (numDice: number, faces: number, target: number): number => {
    const dp: number[][] = new Array(target + 1).fill(0).map(() => new Array(numDice + 1).fill(0)) 
    dp[0][0] = 1
    const mod: number = 10 ** 9 + 7
    for (let i = 1; i <= target; i++) {
        for (let j = 1; j <= numDice; j++) {
            for (let k = 1; k <= faces; k++) {
                if (k > i) break;
                dp[i][j] += dp[i-k][j-1] % mod
            }
        }
    }
    return dp[target][numDice] % mod
}


console.log(numRollsToTarget(2, 6, 7)) 
console.log(numRollsToTarget(30, 30, 500))