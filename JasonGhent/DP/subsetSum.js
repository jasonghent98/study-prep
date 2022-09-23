/* Given a set of positive numbers, determine if there exists a subset whose sum is equal to a given number ‘S’.
  
                 i
Input: {1, 2, 3, 7}, S=6
Output: True
The given set has a subset whose sum is '6': {1, 2, 3}

we need to find all combinations of subsets and their sums, in order to solve this

for each number, we can either opt to take it or exclude it.

TIME: O(2^N), where we have 2^n different subsets we need to find the sum for
SPACE: O(1)


OPTIMAL: O(N)
SPACE: O(N)

APPROACH:
- iterate over each set and either include or exclude the number for the currentSum
- there will be two recursive calls:
    - one that skips the current elemtn
    - one that includes


                                            currSum = 0
                                            currSet = []
                                    /                                   \
                                include 1                               exclude 1
                                currSum = 1                             currSum = 0;
                                currSet = [1]                           currSet = []
                     /                              \                   /                            \  

                include 2                           exclude 2               include2                            exclude 2
                currSum = 3                         currSum = 1                 currSum = 2                     currSum = 0
                currSet = [1,2]                     currSet = [1]               currSet = [2]                   currSet = []
        /                       \                /              \               /              \                /       \
    include 3                  exclude 3      include3          exclude3    include3          exclude3   include3          exclude3


*/




const doesContainSum = (arrNums, targetSum) => {
    if (!arrNums.length) return false;
    const memo = new Map(); // memoization
    // needs targetSum, currentSum, idx, arrNums, memo
    const containsSumRecursive = (currentSum, idx) => {
        // in cache?
        if (memo.has(`${targetSum} - ${currentSum}`)) return memo.get(`${targetSum} - ${currentSum}`);
        // base case
        // if we have considered all numbers or if we overstep the sum (only have pos nums) 
        if (idx >= arrNums.length || currentSum > targetSum) return false;
        // if currSum === targetSum, we found a subset
        if (currentSum === targetSum) return true;

        // recursive call
        const doesContain = (containsSumRecursive(currentSum + arrNums[idx], idx+1) || 
                             containsSumRecursive(currentSum, idx+1));
        // store the result in our memo
        memo.set(`${targetSum} - ${currentSum}`, doesContain);
        return doesContain;
    }
    return containsSumRecursive(0, 0);
}




const list = [1,2,3,7]
const targetSum = 6

const falseList = [1,3,4,8];

console.log(doesContainSum(list, targetSum)); // true
console.log(doesContainSum(falseList, targetSum)); // false
console.log(doesContainSum([], targetSum)); // false

