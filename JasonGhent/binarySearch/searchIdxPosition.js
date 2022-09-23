var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    if (target > nums[end]) return end + 1; // edge case
    while (start <= end) {
        let mid = Math.floor(start + (end-start) / 2);
        if (target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else return mid;
    }
    // if we break out, we never found the target
    return start;
};