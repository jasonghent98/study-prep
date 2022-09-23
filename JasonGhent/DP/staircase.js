/* Given a stair with ‘n’ steps, implement a method to count how many possible ways are there to reach the top of the 
staircase, given that, at every step you can either take 1 step, 2 steps, or 3 steps. 

what would the base cases be for this problem?
n = 0 => 0
n = 1 => 1
n = 2 => 2
n = 3 => 3


TIME: O(N)
SPACE: O(N)

*/
const stairCase = (stairsInt) => {
    // handle edge case
    if (stairsInt < 2) return 1;
    // start with the base cases
    const dp = new Array(stairsInt + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    // use the base case solutions to build the larger solution: our function will be dp[n] = dp[n-1] + dp[n-2] + dp[n-3]
    for (i = 3; i <= stairsInt; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
    }
    return dp[stairsInt];
}

console.log(stairCase(3)) // 4
console.log(stairCase(4)) // 7



/*  
TIME: O(N)
SPACE: O(1)

we only need to store the three previous numbers in order to compute the nth input for the function

*/

const stairCaseOptimal = (stairsInt) => {
    // handle edge case
    if (stairsInt < 2) return 1;
    if (stairsInt === 2) return 2;
    // three vars to keep track of
    let previous = 2, secondPrevious = 1, thirdPrevious = 1, output = 0;
    for (let i = 3; i <= stairsInt; i++) {
        output = previous + secondPrevious + thirdPrevious;
        // shift the pointers
        thirdPrevious = secondPrevious;
        secondPrevious = previous;
        previous = output;
    }
    return output;
}


console.log(stairCaseOptimal(3)) // 4
console.log(stairCaseOptimal(4)) // 7