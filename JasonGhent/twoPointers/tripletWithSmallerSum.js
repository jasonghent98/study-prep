// find the number of distinct triplets in nums that sum to be less than target. 
// Return the number of triplets there are


// x + y + z < target
// we can loop through the nums array for each num (x), we want to find two other numbers that satisfy this condition
// y + z < target - x

function findRemainingPair (nums, targetSum, currentPointer) {
    let count = 0;
    // right pointer for possible (Z) value
    let rightPointer = nums.length - 1;
    // left pointer for possible (Y) value
    let leftPointer = currentPointer+1;
    // as long as the left pointer is < right pointer, we can check for a possible pair that satisfies y + z < target - x
    while (leftPointer < rightPointer) {
        // if we find two nums that sum to less than our targetSum (target - nums[i]), we can update our count!
        if (nums[leftPointer] + nums[rightPointer] < targetSum) {
            // bc nums is sorted, we know that every value to the left of rightPointer will result in < targetSum
            count += rightPointer - leftPointer;
            // only move our left pointer to right
            leftPointer++;
        } else {
            rightPointer--;
        }

    }
    return count;
}

// triplets with smaller sum than target
function tripletsWithSmallerSum (nums, target) {
    // sort the array first 
    nums.sort((a,b) => a - b);
    // init a count var to keep track of total triplets < target( return value )
    let count = 0;
    // call helper function on each element in nums. 
    for (let i = 0; i < nums.length - 2; i++) {
        count += findRemainingPair(nums, target - nums[i], i);
    }
    return count;
}
