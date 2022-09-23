/* Given a set of positive numbers (non zero) and a target sum ‘S’. Each number should be assigned either 
a ‘+’ or ‘-’ sign. We need to find out total ways to assign symbols to make the sum of numbers equal to target ‘S’. 

we have two decisions for each number in our set, either make it positive or negative

TIME: O(2^N), where n is the total number of elements in our set
SPACE: O(), where we need to return the total 

APPROACH:
- DP
    Start with the base case. Bottom-up approach


    {1, 1, 2, 3}, S=1

    

*/

const targetSum = (nums, targetSum) => {
    let totalSum = 0;
    // calculate the 
    for (let num of nums) {
        totalSum += num;
        if (num < 1) return -1;
    }
    if (totalSum < targetSum || (targetSum + totalSum) % 2 === 1) return 0
    return countSubsets(nums, (targetSum + totalSum)/ 2);
}

let countSubsets = function(num, sum) {
    const n = num.length;
    const dp = Array(sum + 1).fill(0);
    dp[0] = 1;
  
    // with only one number, we can form a subset only when the required sum is equal to the number
    for (let s = 1; s <= sum; s++) {
      dp[s] = num[0] == s ? 1 : 0;
    }
  
    // process all subsets for all sums
    for (let i = 1; i < num.length; i++) {
      for (let s = sum; s >= 0; s--) {
        if (s >= num[i]) dp[s] += dp[s - num[i]];
      }
    }
  
    return dp[sum];
  };

