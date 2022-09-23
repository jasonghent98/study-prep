// Given an array of integers nums sorted in non-decreasing order, find the starting and ending 
// position of a given target value.

// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.


// array is sorted in increasing order (all instances of target will be grouped)
// find the instance of target through binary search
// once found, init 2 pointers and move left and right as long as one of the pointers contain the same value

// if no instance of the number is found, return [-1,-1]

// constraints:
// if nums.length === 0, return [-1,-1]
// if target dne after bs, return [-1,-1]
                     // l
// test case:          r
                       // m  
    // nums = [5,7,7,8,8,10], target = 8

// mid = 2


// approach:
// 2 pointers: l and r
// while l < r
var searchRange = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let midpoint = Math.floor((l+r) / 2);
        if (target < nums[midpoint]) {
            r = midpoint - 1;
        } else if (target > nums[midpoint]) {
            l = midpoint + 1;
        } else {
//             midpoint = target
            l = midpoint;
            r = midpoint;
            while (nums[l-1] === target || nums[r+1] === target) {
//                 if both next vals are target...
                if (nums[l-1] === target && nums[r+1] === target) {
                    l--;
                    r++;
                }
                if (nums[l-1] === target) {
                    l--;
                } 
                if (nums[r+1] === target) {
                    r++;
                }
            }
            return [l,r];
        }
    }
//     if we break out of entire loop and never return val, return [-1,-1]
    return [-1,-1];
};