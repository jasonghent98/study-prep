/* 
Given a sequence, find the length of its longest repeating subsequence (LRS). 
A repeating subsequence will be the one that appears at least twice in the 
original sequence and is not overlapping (i.e. none of the corresponding characters 
in the repeating subsequences have the same index).



--TESTCASES--
Example 1:

Input: “a a b d b c e c”
Output: 3                                                  1 2 1   2 1   2
Explanation: The longest repeating subsequence is “a b c” {a a b d b c e c}.


CONSTRAINTS:




IDEAS: 
1. If the two indexes are not the same and the characters at both the indexes are same, 
we can recursively match for the remaining length (i.e. by incrementing both the indexes)

2. If the characters at both the indexes don’t match, we start two new recursive calls by 
incrementing each index separately. The LRS would be the one with the highest length from the two recursive calls.



COMPLEXITY:
TIME: O(N^2)
SPACE: O(N^2)

*/

const findLRSLength = function(str) {
    const dp = Array(str.length + 1)
      .fill(0)
      .map(() => Array(str.length + 1).fill(0));
  
    let maxLength = 0;
    // dp[i1][i2] will be storing the LRS up to str[0..i1-1][0..i2-1]
    // this also means that subsequences of length zero (first row and column of dp[][]),
    // will always have LRS of size zero.
    for (let i1 = 1; i1 <= str.length; i1++) {
      for (let i2 = 1; i2 <= str.length; i2++) {
        if (i1 !== i2 && str[i1 - 1] === str[i2 - 1]) {
          dp[i1][i2] = 1 + dp[i1 - 1][i2 - 1];
        } else {
          dp[i1][i2] = Math.max(dp[i1 - 1][i2], dp[i1][i2 - 1]);
        }
  
        maxLength = Math.max(maxLength, dp[i1][i2]);
      }
    }
    return maxLength;
  };
  
  console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('tomorrow')}`);
  console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('aabdbcec')}`);
  console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('fmff')}`);
