// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// constraints: 
//     1. 2 <= nums.length <= 10^4
//     2. -10^9 <= nums[i] <= 10^9
//     3. -10^9 <= target <= 10^9
//     4. there is only one valid answer for each input
    // 5. cannot use the same input twice.

// test cases
//     ex.1:      
//         let table = {0: 3, 1: 2, 2: 4}

//         nums = [3,2,4]
//         target = 6
//         ouput = [1,2]

// strategy:
    // brute force would involve initializing 2 pointers in a nested loop fashion and testing each combo of numbers to see if they add up to target // O(n^2) time

// a more optimal strategy involves iterating over the entire array once 
// difference = target - arr[i];
// check to see if difference exists as a key in table
//      if yes, return the current [index, table[difference]]
//      if not, store the arr num as a key in table, and index as value

// Optimal Solution: O(n) time; O(1) space
const twoSum = (nums, target) => {
    let arrValuesToTable = {};
    for (let i = 0; i < nums.length; i++) {
//     compute difference 
        let difference = target - nums[i];
        if (!(difference in arrValuesToTable)) {
            arrValuesToTable[nums[i]] = i;
        } else {
//          difference exists as a key in the hash table. return indices
            return [arrValuesToTable[difference], i]
        }
    }

}