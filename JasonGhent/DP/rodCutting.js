/* Given a rod of length ‘n’, we are asked to cut the rod and sell the pieces in a 
way that will maximize the profit. We are also given the price of every piece of length ‘i’ where ‘1 <= i <= n’. 

inputs: rodlength, profits [], lengths []
output: the maximum profit we can generate if we cut the ropes up and sell each of them


for each rope piece, we can either:
    include it or exclude it

we can use dynamic programming to solve this problem, as we can build the optimal solution 
for the problem by first solving the smaller subproblems

base case:
if have a length of 0, we cant make any profit

if we only choose one item, we can only sell it if it is within bounds of our current length

a 2d grid will help visualize the problem and store the results of previous computations to bring down the time complexity 
from exponential to O(L x P)
*/

const rodCutting = (profits, lengths, rodLength) => {
    // edge cases: cant sell any if rodlength is 0 || discrep. between profits and lengths || no profits from any ropes
    if (rodLength <= 0 || profits.length != lengths.length || profits.length < 1) return 0;
    // init dp array to store results of previous comps
    const ropeLengths = lengths.length;
    // profits on the y axis; ropelengths on the x-axis
    const dp = new Array(profits.length).fill(0).map(() => new Array(ropeLengths + 1).fill(0)); // why + 1?
    // 0 profit if our length is 0
    for (let r = 0; r < profits.length; r++) {
        dp[r][0] = 0; 
    }
    for (let l = 1; l <= ropeLengths; l++) {
        if (profits[0] <= rodLength) dp[0][l] = profits[0];
    }

    // dp
    for (let r = 0; r < profits.length; r++) {
        for (let l = 1; l <= ropeLengths; l++) {
            let profit1 = 0, profit2 = 0;
            //exclude the rope: take the same length of the previous rope
            if (lengths[r] <= l) profit2 = profits[r] + dp[r][l - lengths[r]];
            // include if the current rope length is within the current length and if we have a previous object we can also add on
            if (r > 0) profit1 = dp[r - 1][l];
            // always take the max between the two options
            dp[r][l] = Math.max(profit1, profit2); 
        }
    }
    return dp[profits.length-1][ropeLengths]
}

console.log(rodCutting([2, 6, 7, 10, 13], [1, 2, 3, 4, 5], 5)); // 13