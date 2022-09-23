// Optimal solution (avoid reindexing array elements by swapping instead of splice)
// O(n) time;
// O(1) space; no extra memory

const removeDuplicates = nums => {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (nums[left] === nums[right]) right++
        else {
            nums[left + 1] = nums[right];
            left++
            right++
        }
    }
    return left + 1;
}