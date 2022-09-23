// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// in order to find the kth largest Element, we can sort the Array, then access the element at 
// the [array.length - k] index

// [1,2,2,3,3,4,5,5,6]
// runtime: O(n log n) (quick/merge sort under the hood): space: O(n), sort changes the original array


var findKthLargest = function(nums, k) {
    let sorted = nums.sort((a,b) => a-b);
    return sorted[sorted.length - k]
};