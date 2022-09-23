/* Given two strings ‘s1’ and ‘s2’, find the length of the longest substring which is common in both the strings. */


const findLCSLength = function(s1, s2) {
    // account for if we have 0 characters: we can have [0,s.length] characters
    // if any of the strings have 0 characters the LCS will be 0
    const dp = Array(s1.length + 1).fill(0).map(() => Array(s2.length + 1).fill(0));
  
    let maxLength = 0;
    
    for (let i = 1; i <= s1.length; i++) {
      for (let j = 1; j <= s2.length; j++) {
          // if the previous idx share the same char
        if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
            // 1 + whatever the LCS was of the previous substrings
          dp[i][j] = 1 + dp[i - 1][j - 1];
          // update the maxLength if necessary
          maxLength = Math.max(maxLength, dp[i][j]);
        }
      }
    }
    return maxLength;
  };
  
  console.log(`Length of Longest Common Substring: ---> ${findLCSLength('abdca', 'cbda')}`); // 2
  console.log(`Length of Longest Common Substring: ---> ${findLCSLength('passport', 'ppsspt')}`); // 3
  