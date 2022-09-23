// Given an array of sorted numbers and a target sum, find a pair in the array whose 
// sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) 
// such that they add up to the given target.

const pairWithTargetSum = (nums, target) => {
    let left = 0; // first index
    let right = nums.length - 1; // last index
    while (left < right) {
        if (nums[left] + nums[right] < target) { // we need a larger number
            left++;
        } else if (nums[left] + nums[right] > target) { //we need a smaller number
            right--;
        } else {
            return [left, right] // return indices if values at pointers sum to target
        }
    }
    return [-1,-1] // if no pair exists that sums to target
}

const removeDuplicates = nums => {
	let nonDuplicate = 0;
	let next = 0;
	while (next < nums.length) {
		if (nums[nonDuplicate] === nums[next]) {
			next++;
		} else {
			nums[nonDuplicate+1] = nums[next]
			nonDuplicate++;
			next++;
		}
}
    return nonDuplicate + 1;
}
