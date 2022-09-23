/* We are given a ribbon of length ‘n’ and a set of possible ribbon lengths. We need to cut the ribbon into the 
maximum number of pieces that comply with the above-mentioned possible lengths. 
Write a method that will return the count of pieces. 

inputs: ribbon, set of possible ribbon lengths
output: max number of pieces that comply with possible lengths


APPROACH:
- we can solve this problem starting at the base case


base case:
    if the ribbon given is of length 0, we wont be able to cut the ribbon into any pieces that comply with the lengths of any set of ribbon lengths, so this will be 0


    we can use a dp, 1d array to store the number of ribbons we can cut for each length, ranging from 0-ribbonLength
    the key/idx will represent the current length of the ribbon, and then we will consider the current possible ribbon length to see if we can include it

*/

const countRibbonPieces = (ribbonLengths, total) => {
    // edge cases?

    // dp array
    const n = ribbonLengths.length;
    const dp = new Array(n).fill(0).map(() => new Array(total + 1).fill(0)); // starting from 0 - ribbonLength
    // init to 0, we cant have negative pieces of ribbons
    for (let i = 0; i < n; i++) for (let j = 0; j <= total; j++) dp[i][j] = Number.MIN_VALUE
    for (let r = 0; r < n; r++) dp[r][0] = 0;

    for (let i = 0; i < n; i++) {
        for (let t = 1; t <= total; t++) {
          if (i > 0) {
            // exclude the ribbon
            dp[i][t] = dp[i - 1][t];
          }
          // include the ribbon and check if the remaining length can be cut into available lenghts
          if (t >= ribbonLengths[i] && dp[i][t - ribbonLengths[i]] != Number.MIN_VALUE) {
            dp[i][t] = Math.max(dp[i][t], dp[i][t - ribbonLengths[i]] + 1);
          }
        }
      }
    
      // total combinations will be at the bottom-right corner, return '-1' if cutting is not possible
      return dp[n - 1][total] == Number.MIN_VALUE ? -1 : dp[n - 1][total];
}

console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3, 5], 5)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3], 7)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5, 7], 13)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5], 7)}`);