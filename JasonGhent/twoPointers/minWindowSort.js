/*
Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, 
then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

*/ 

const minWindowSort = (nums) => {
    // two ptrs
    let left = 0, right = nums.length - 1
    // find the first number from the left and right that are unsorted

    while (left < nums.length - 1 && nums[left] <= nums[left+1]) left++
    if (left == nums.length - 1) return 0 // already sorted
    while (right > 0 && nums[right] >= nums[right-1]) right--

    // find the min and the max within this subarray
    let subarrayMin = Infinity, subarrayMax = -Infinity
    for (let i = left; i <= right; i++) {
        subarrayMin = Math.min(subarrayMin, nums[i])
        subarrayMax = Math.max(subarrayMax, nums[i])
    }

    // place the min and the max in their correct locations
    while (left > 0 && nums[left-1] > subarrayMin) right--
    while (right < nums.length - 1 && nums[right+1] < subarrayMax) right++
    return right - left + 1
}