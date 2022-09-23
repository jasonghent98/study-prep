const searchRange = (nums, target) => {
    const result = [-1, -1];
    result[0] = binarySearch(nums, target, false);
    result[1] = binarySearch(nums, target, true);
    return result;
}

const binarySearch = (nums, target, isMax) => {
    let start = 0;
    let end = nums.length - 1;
    let keyIdx = -1;
    while (start <= end) {
        let mid = Math.floor(start + (end-start)/2);
        if (target < nums[mid]) end = mid - 1;
        else if (target > nums[mid]) start = mid + 1;
        else {
            keyIdx = mid;
            if (isMax) start = mid + 1;
            else end = mid - 1;
        }
    }
    return keyIdx;
}

console.log(searchRange([3,4,4,4,4,5,8,9], 4));