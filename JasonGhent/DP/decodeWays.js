/* 
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the 
mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.


*/
const decodeWays = (str) => {
    if (str[0] === '0') return 0
    // will store the num of ways to decode for each substr starting from end '' to 'str'
    const dp = new Array(str.length).fill(0)
    // num of ways to decode an empty str
    dp[str.length] = 1
    for (let i = str.length - 1; i >= 0; i--) {
        // if non zero, we can always just decode the digit by itself
        if (str[i] !== '0') dp[i] = dp[i+1]
        else dp[i] = 0
        // if the next char is valid
        const nextIsValid = '0123456'.includes(str[i])
        if (i + 1 < str.length && (str[i] === '1' || str[i] === '2' && nextIsValid)) {
            // we can add on whatever dp i + 2 was 
            dp[i] += dp[i+2]
        }
    }
    return dp[0]
}

console.log(decodeWays('12')) // 2
console.log(decodeWays('06')) // 0 