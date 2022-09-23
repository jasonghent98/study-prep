/* 

Given a number sequence, find the length of its Longest Increasing Subsequence (LIS). 
In an increasing subsequence, all the elements are in increasing order 
(from lowest to highest).



input: array of numbers
output: int representing the longest increasing subsequence


a subsequence allows you to delete elements and does not have to be contiguous

--TESTCASES--

EXAMPLE1:
input: [4,2,3,6,10,1,12]
output: 5



EXAMPLE2:
input: [-4,10,3,7,15]
output: 4



Constraints:
- if the numbers array is empty, return 0
- all real numbers
- the first element does not have a previous so we count this as ascending order
- assume that each number is unique and will not have duplicates


Ideas:
- consider all possible subsequences in the array that are in increasing order, considering one number at a time
- if the current number we are at is greater than the previous, we can increment our count and recursively call our function with the next element




Complexity:
At each number within the the nums array, there are two decisions we can make:
1. if the current number is greater than the previous || if i === 0, we can increment the count and recurse the remaining array
2. consider skipping the current number to see if that gives us a larger incr subsequence

two recursive calls at each step (indx)

TIME: O(N), where we are making 2 recursive calls for each element, but only solving each subproblem once
SPACE: O(N), where we store each subproblem in our map once for cache



BASE CASE:
- if the numbers array is empty, return 0




PARAMETERS FOR RECURSION:
- keep track of the current index
- longestIncreasingSubseq (global variable)
- memoization map (global)
- numbers array (global)



*/




const longestIncrSubseq = (numbers) => {
    // if numbers is empty, there is no increasing subseq
    if (!numbers.length) return 0;
    const memo = new Map();
    // define the helper recursive function
    const findLongestIncrSubseq = (currIdx) => {
        // define our base case: if the curridx reaches the end of the numbers array, return 0;
        if (numbers.length === currIdx) return 0;

        // check if the problem has been solved in cache
        if (memo.has(currIdx)) return memo.get(currIdx);
        // include the number if it is greater than the previous or if at first indx
        let case1 = 0
        if (currIdx === 0 || numbers[currIdx] > numbers[currIdx-1]) {
            case1 = 1 + findLongestIncrSubseq(currIdx+1);
        } 
        // exclude the current number 
        const case2 = findLongestIncrSubseq(currIdx + 1);
        // store the the max of the two cases for the currentIdx
        memo.set(currIdx, Math.max(case1, case2));
        return Math.max(case1, case2);
    }
    return findLongestIncrSubseq(0);
}


console.log(longestIncrSubseq([4,2,3,6,10,1,12])); // 5
console.log(longestIncrSubseq([-4, 10, 3, 7, 15])); // 4