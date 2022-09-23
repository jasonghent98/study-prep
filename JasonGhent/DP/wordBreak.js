/* 
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence 
of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.


TIME: O(N * M), where we consider n substrings within our input str. for each substring, we iterate over all words to see if we have a match
SPACE: O(N), where we store if we have a match for each substr in a dp array
*/


const wordBreak = (str, wordDict) => {
    const dp = new Array(str.length + 1).fill(false)
    // start with true at the end
    dp[str.length] = true
    // working from end to beginning, check if we have matches
    for (let s = str.length - 1; s >= 0; s--) {
        for (let word of wordDict) {
            // if we can make a substr with the word.length and there is a match
            if (s + word.length <= str.length && str.substring(s, s + word.length) === word) {
                dp[s] = dp[s + word.length] // if there is a match, we will set it to true
            }
            if (dp[s]) break // if we already found a word that matches current substr
        }
    }
    return dp[0]
}

console.log(wordBreak('leetcode', ['leet', 'code'])) // true
console.log(wordBreak('hotdog', ['h', 'o', 'dog'])) // false