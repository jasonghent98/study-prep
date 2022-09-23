/* 
	
3:45 PM

Given a rod of length ‘n’, we are asked to cut the rod and sell the pieces in a way that will maximize the profit. 
We are also given the price of every piece of length ‘i’ where ‘1 <= i <= n’.

inputs: rodLength (int), prices of each rope length []: int, array of rodLengths []
output: return the max profit

constraints: 
    - take the price as profit for selling each piece of rope
    - profits will be in increasing order
    - profits correspond to same indices for rodLengths array
    - reuse each rope length as many times as want


TESTCASES:
Edge Case:                       
input: rodLength = 0, profits = [1,2,3,5], [0,1,2,3]

EXAMPLE 2: 
                                                             i
inputs: rodlength = 4, profits = [1,2,3,5], rodLengths= [0,1,2,3]
output: 8


                                    4
                    include 1               exclude 1
                3                                       4
            
            include 2       exclude 2   include 2       exclude 2   

RECUSRIVE:      

TIME: O(N)
SPACE: O(N), n would be the space for the recursion stack
            
ITERATIVE:

TIME: O(N)
SPACE: O(N)
*/

const maxProfit = (rodLength, profits, rodLengths) => {
    // init a dp 2d array to store previous values
    const dp = new Array(profits.length).fill(0).map(() => new Array(rodLength + 1)); // + 1 to consider rodLength of 0 (base case)
    // if our rodLength is 0... no profit

    // --- BASE CASES ---
    for(let r = 0; r < profits.length; r++) dp[r][0] = 0;

    // // consider the case where we only have one profit we can acheive (one rod length given)
    for (let rL = 0; rL <= rodLength; rL++) if (rodLengths[0] <= rL) dp[0][rL] = profits[0];
    
    // use the base cases to produce the max profit at the end
    for (let r = 0; r < profits.length; r++) {
        for (let rL = 1; rL <= rodLength; rL++) {
            // two possibilities
            let profit1 = 0, profit2 = 0;

            // exclude current number
            if (r > 0) profit1 = dp[r - 1][rL];
    
            // include current profit if it fits within rodLength
            if (rodLengths[r] <= rL) profit2 = profits[r] + dp[r][rL - rodLengths[r]];

            dp[r][rL] = Math.max(profit1, profit2);
        }
    }
    // answer will be in bottom right cell
    return dp[profits.length - 1][rodLength];
}

console.log(maxProfit(4, [1,2,3,5],[0,1,2,3])); // 8
console.log(maxProfit(5, [2,6,7,10,13], [1,2,3,4,5])) // 14

