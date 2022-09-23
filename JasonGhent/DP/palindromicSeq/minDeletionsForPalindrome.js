/* 
Given a string, find the minimum number of characters that we can remove to make it a palindrome.

SOLUTION:

This problem can be easily converted to the Longest Palindromic Subsequence (LPS) problem. We can use the fact that 
LPS is the best subsequence we can have, so any character that is not part of LPS must be removed. Please note 
that it is ‘Longest Palindromic SubSequence’ and not ‘Longest Palindrome Substring’.

*/

let findMinimumDeletions = function(st) {
    function findLPSLength(st) {
      // dp[i][j] stores the length of LPS from index 'i' to index 'j'
      var dp = Array(st.length).fill(0).map(() => Array(st.length).fill(0));
  
      // every sequence with one element is a palindrome of length 1
      for (let i = 0; i < st.length; i++) {
        dp[i][i] = 1;
      }
  
      for (let startIndex = st.length - 1; startIndex >= 0; startIndex--) {
        for (let endIndex = startIndex + 1; endIndex < st.length; endIndex++) {
          // case 1: elements at the beginning and the end are the same
          if (st.charAt(startIndex) == st.charAt(endIndex)) {
            dp[startIndex][endIndex] = 2 + dp[startIndex + 1][endIndex - 1];
          } else {
            // case 2: skip one element either from the beginning or the end, depending on which is larger
            dp[startIndex][endIndex] = Math.max(
              dp[startIndex + 1][endIndex],
              dp[startIndex][endIndex - 1]
            );
          }
        }
      }
      return dp[0][st.length - 1];
    }
}