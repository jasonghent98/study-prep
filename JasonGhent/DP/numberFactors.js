/* Given a number ‘n’, implement a method to count how many possible ways there are to 
express ‘n’ as the sum of 1, 3, or 4.

inputs: n (int)
ouput: integer value representing all possible ways to express n as the sum of 1,3,4

EXAMPLE 1:
input: 4
output: 4


APPROACH:
- starting from 4, there are three options we can take to bring our sum to 0
                                            4

                                -3         -1         -4
    
                        1                   3                0
                    3   4   1           3   4   1
                -2     -3     0      0     -1     2
                                              3   4   1
                                            -     -     1
                                                    3   4   1
                                                                0

BRUTE FORCE:
TIME: O(3^N), where we can make 3 possible decisions at each level
SPACE: O(N), forn stack frames on the recursion stack


OPTIMAL
TIME: O(N), where we only solve each subproblem once
SPACE: O(N), where we store the result of each subproblem once 

parameters: currentSum, 

*/

const countWays = (n) => {
  // cache
  const dp = {};
  // helper recursion
  const recursiveHelper = (currentSum) => {
    // if we hit 0, we can found one possible way!
    if (currentSum === 0 || currentSum === 1) return 1;
    // if we go below 0, we overstepped our target
    if (currentSum < 0) return 0;

    // walk down the decision tree
    const subtract4 = recursiveHelper(currentSum - 4);
    const subtract3 = recursiveHelper(currentSum - 3);
    const subtract1 = recursiveHelper(currentSum - 1);
    // store the cache
    dp[currentSum] = subtract4 + subtract3 + subtract1;
    // return the result after saving it to cache
    return dp[currentSum];
  }
  return recursiveHelper(n);
}

// console.log(`Number of ways: ---> ${countWays(4)}`); // 4
// console.log(`Number of ways: ---> ${countWays(5)}`); // 6
// console.log(`Number of ways: ---> ${countWays(6)}`); // 9


const countWaysBottomUp = n => {
  // init the base cases
  if (n <= 2) return 1;
  if (n === 3) return 2;

  const dp = new Array(n+1).fill(0); // account for if n === 0 
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;
  // compute the larger n based on these base case subproblems... dp[4] = dp[3]
  for (i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i-3] + dp[i-4];
  }
  return dp[n];
}

console.log(`Number of ways: ---> ${countWaysBottomUp(4)}`); // 4
console.log(`Number of ways: ---> ${countWaysBottomUp(5)}`); // 6
console.log(`Number of ways: ---> ${countWaysBottomUp(6)}`); // 9