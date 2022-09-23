/* 

recursive memoized solution
TIME: O(N)
SPACE: O(N), for recursive stack and for storing memoized results in hashmap
*/

const fib = (n, memo = {}) => {
    if (n < 2) return n;
    if (memo[n]) return memo[n];

    const prev = fib(n-1, memo);
    const twoPrev = fib(n-2, memo);
    memo[n] = prev + twoPrev;
    return memo[n];
}

// tabular approach: O(N) time, O(1) space
 const tabularFib = (n) => {

}