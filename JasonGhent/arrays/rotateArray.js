/* 
Given an array, rotate the array to the right by k steps, where k is non-negative.


time: O(N)
space: O(1)
*/

const rotate = (nums, k) => {
    // reverse the entire array
    reverse(nums, 0, nums.length - 1) 
    // account for rotations >= length of array
    k %= nums.length
    // reverse the first portion just before the kth index
    reverse(nums, 0, k - 1) 
    // reverse the second half and return the result
    return reverse(nums, k, nums.length - 1)
}

const reverse = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++, end--
    }
    return nums
}

console.log(rotate([1,2,3,4,5], 3))
console.log(rotate([1,2,3,4,5,6], 4)) // [3,4,5,6,1,2]