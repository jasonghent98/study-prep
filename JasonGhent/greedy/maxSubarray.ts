/**
 * 
 * greedy algo // kadane's algo
 * 
 * O(N) TIME, O(N) SPACE
 */

function maxSubArray(nums: number[]): number {
    let maxSum: number = -Infinity, currSum = -Infinity;
    for (let i: number = 0; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum;
};

console.log(maxSubArray([-3,5,-3,9])) // 11