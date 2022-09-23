/* 
You are given an integer array nums of length n which represents a permutation of all the 
integers in the range [0, n - 1].

The number of global inversions is the number of the different pairs (i, j) where:

0 <= i < j < n
nums[i] > nums[j]
The number of local inversions is the number of indices i where:

0 <= i < n - 1
nums[i] > nums[i + 1]
Return true if the number of global inversions is equal to the number of local inversions.


constraints
- all non-negative numbers
- find if the given input has the same number of local and global inversions

- all local inv are global inv, but not all global inv are local inv

approach
1. find the first strict global inv. if we find this, return false



complexity
time: O(N), iterating over the entire array in worst case
space: O(1), 

     i
[2,0,1]
*/

const isIdealPerm = (nums) => {
    let max = -1 
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i])
        if (max > nums[i+2]) return false
    }
    return true
}

console.log(isIdealPerm([1,0,2])) // true
console.log(isIdealPerm([1,2,0])) // false