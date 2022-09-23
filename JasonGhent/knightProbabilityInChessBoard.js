
const knightProbability = function(n, k, row, column) {
    const directions = [[-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2]];
    const dp = new Array(k+1).fill(0).map(() => new Array(n).map(() => new Array(n).fill(0)));
    dp[0][row][column] = 1;
    for (let step = 1; step<=k; step++) {
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                for (let i = 0; i < directions.length;i++) {
                    const dir = directions[i];
                    const prevRow = row + dir[0];
                    const prevCol = col + dir[1];
                    if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
                        dp[step][row][col] += dp[step-1][prevRow][prevCol]/8;
                    }
                }
            }
        }
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res+= dp[k][i][j]
        }
    }
    return res;
    
};