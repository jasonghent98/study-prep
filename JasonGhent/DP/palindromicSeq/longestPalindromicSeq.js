/* Given a sequence, find the length of its Longest Palindromic Subsequence (LPS). In a palindromic subsequence, 
elements read the same backward and forward.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing 
the order of the remaining elements. 

a sequence is considered a subsequence of itself

EXAMPLE 1:

Input: "abdbca"
Output: 5
Explanation: LPS is "abdba".



Complexity:
each function call will either call one recursive call (case1) or two recursive calls (case2)

TIME: O(2^N)
SPACE: O(1)


by storing the results of previously computed palindromes we can reduce to 

OPTIMAL:
TIME: O(N^2)
SPACE: O(N^2)


palindromic subsequence: allows you to delete some or no parts of the string w/o changing order to make a palindrome
palindromic substring: takes out a portion of a string between two specified indices

*** every substring is a subsequence, but not every subsequence is a substring ***
*/

const findLPSLength = (string) => {
  // edge cases
  // init dp array to store previous results. represents the total palindromes found for within each subsequence
  const dp = new Array(string.length).fill(0).map(() => new Array(string.length).fill(0));

  // each letter will be a palindrome of itself
  for (let i = 0; i < string.length; i++) {
    dp[i][i] = 1;
  }
  // find the longest pal subsequence starting from the end
  for (let sI = string.length - 1; sI >= 0; sI--) {
    for (let eI = sI + 1; eI < string.length; eI++) {
      // if the chars at the indices are the same
      if (string[sI] === string[eI]) {
        dp[sI][eI] = 2 + dp[sI+1][eI-1];
      } else {
        // take the longest pal subseq from either substring(sI, eI-1) || substring(sI+1, eI-1)
        dp[sI][eI] = Math.max(dp[sI+1][eI], dp[sI][eI-1]);
      }
    }
  }
  return dp[0][string.length - 1];
}
  
  console.log('Length of LPS ---> ' + findLPSLength('abdbca')); //5
  console.log('Length of LPS ---> ' + findLPSLength('cddpd')); //3
  console.log('Length of LPS ---> ' + findLPSLength('pqr')); //1