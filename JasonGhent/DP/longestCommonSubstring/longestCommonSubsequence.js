/* Given two strings ‘s1’ and ‘s2’, find the length of the longest subsequence which is common in both the strings.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing 
the order of the remaining elements. 

Since we want to match all the subsequences of the given two strings, we can use a two-dimensional array to store our results. 
The lengths of the two strings will define the size of the array’s two dimensions. So for every index ‘i’ in string ‘s1’ and ‘j’ 
in string ‘s2’, we will choose one of the following two options:

If the character s1[i] matches s2[j], the length of the common subsequence would be one plus the length of the common subsequence 
till the i-1 and j-1 indexes in the two respective strings.

If the character s1[i] does not match s2[j], we will take the longest subsequence by either skipping ith or jth character 
from the respective strings.

This breaks down our problem to a complexity of:
TIME: O(N * M), where we solve each subproblem once
SPACE: O(N * M), where we store each subproblem once in cache



constraints:
- the strings may not be equal in length
- english lowercase letters




Idea:
- store each of the length + 1 of each string into a dp 2-dimensional array
- fill in 0s for the base case (if we have no letters for one of the strings, there will be no common subsequence)
- formula: 
    - if two characters are the same for our pointers, then the length of the longest subsequence will be 1 + the length of the longest subsequence up until
    i-1 and j-1, respectively
    - if they are not the same, the longest subsequence will be the length of the longest subsequence by either skipping the ith char or the jth char




Complexity:

'

*/



const longestCommonSubsequence = (string1, string2) => {
    // init output var to 0
    let longestSubsequence = 0; 
    // init the dp array
    const dp = new Array(string1.length + 1).fill(0).map(() => new Array(string2.length + 1).fill(0));

    // build on the base cases from above and fill in the rest of the dp array
    for (let row = 1; row <= string1.length; row++) {
        for (let col = 1; col <= string2.length; col++) {
            // if the current chars are the same, 1 + longest substring up until the row-1, col-1 indices considering both strings
            if (string1[row-1] === string2[col-1]) {
                dp[row][col] = 1 + dp[row-1][col-1];
            } else { // consider skipping each char, and take the max
                dp[row][col] = Math.max(dp[row-1][col], dp[row][col-1]);
            }
            // update the longestSubsequence 
            longestSubsequence = Math.max(longestSubsequence, dp[row][col]);
        }
    }
    return longestSubsequence;
}
    
console.log(longestCommonSubsequence("abdca", "cbda")) // 3
console.log(longestCommonSubsequence("passport", "ppsspt")) // 5


