/*

Given a number sequence, find the increasing subsequence with the highest sum. Write a method that returns the highest sum.

Input: array of numbers
Output: int, representing the highest sum of increasing subsequence


subsequence doesnt have to be contiguous but can be created removing characters




--TESTCASES--


EXAMPLE 1:

INPUT: [4,1,2,6,10,1,12]
OUTPUT: 4 + 6 + 10 + 12 => 32



EXAMPLE 2:
INPUT: [-4,10,3,7,15]
OUTPUT: 25




Constraints:
- all real numbers
- no sorted order






Ideas:
two cases we can take:
1. if the current number is greater than the previous, then we can include the current in our sum and recursive call on the next element
2. consider excluding the current number from the sum and recursively calling on the remaining subsequence 

in order to find the maxSum of an increasing subsequence, we can take the max of of the 2 cases at each step, which will give us the max of all 
increasing subsequences


BASE CASE:
- if the currentidx === numbers.length, return 0 (no incr subsequence to compute highest sum)




Complexity:
TIME: O(N), optimize by solving each subproblem only once
SPACE: O(N), where we store the results of each subproblem in cache, O(H) recursive calls at any given time, where h represents the height of the decision tree
*/


const findHighestSumOfIncrSubseq = (numbers) => {
    // handling the edge case:  if there are no numbers
    if (!numbers.length) return 0
    // init the memo/cache map
    const storedSubproblems = new Map();

    // define our recursive helper function
    const findHighestSumRec = (currIdx, sum) => {
        // if we reach the end of the array, return 0
        if (currIdx === numbers.length) return sum;
        // check for the cache
        if (storedSubproblems.has(`${currIdx}-${sum}`)) return storedSubproblems.get(`${currIdx}-${sum}`);
        // consider both cases for each number
        let sumForCase1 = sum;
        if (currIdx === 0 || numbers[currIdx] > numbers[currIdx-1]) {
            // add the current number and process the next element recursively
            sumForCase1 = findHighestSumRec(currIdx + 1, sum + numbers[currIdx])
        }
        // consider excluding the current number
        const sumForCase2 = findHighestSumRec(currIdx + 1, sum);
        // store the max of both cases for the currIdx
        storedSubproblems.set(`${currIdx}-${sum}`, Math.max(sumForCase1, sumForCase2));
        // return the max of case1 and case2
        return storedSubproblems.get(`${currIdx}-${sum}`);
    }
    return findHighestSumRec(0, 0);
}

console.log(findHighestSumOfIncrSubseq([4,1,2,6,10,1,12])) // 32