/* 
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are 
sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. 

If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.


approach:
- find the first peak element (the first element where nums[i] < nums[i+1]) (this will be the element we want to swap bc everything to the right is sorted in decreasing order, meaning the largest decimal place needs to be changed)
- we swap the element in the largest decimal place (i+1) with the smallest number that is greater and to the right of this number to ensure we are only stepping up minimally from this dec. place to find the 
next greatest permutation
- we sort the array in ascending order from i+1 to ensure that the smallest numbers are placed at the highest decimal places, ensuring we have the next greater smallest element

complexity:
TIME: O(N), traversing the array twice at most (once to find the peak), and once to find the smallest greater element to that peak to perform the swap
SPACE: O(1), reversing can be done in place

*/

const nextGreaterPermutation = (nums) => {
    // if only one element
    if (nums.length === 1) return nums
    // we will be comparing the curr idx with the subsequent to find the first peak from the right
    let i = nums.length - 2
    // find the first peak element from the right
    while (i >= 0 && nums[i] >= nums[i+1]) i--
    // if the idx found within bounds of array, we perform a swap w smallest element greater than idx
    if (i >= 0) {
        let j = nums.length - 1
        while (nums[i] >= nums[j]) j--
        // swap the elements 
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    // reverse the elements from the i + 1 position, as the ith pos has already been swapped
    return reverse(nums, i+1)
}

const reverse = (nums, start) => {
    let end = nums.length - 1
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++, end--
    }
    return nums
}

console.log(nextGreaterPermutation([1,2,3])) // [1,3,2]
console.log(nextGreaterPermutation([1])) // [1]
console.log(nextGreaterPermutation([4,3,2,1])) // [1,2,3,4]