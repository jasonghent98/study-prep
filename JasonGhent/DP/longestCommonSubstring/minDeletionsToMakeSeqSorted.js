/* 
Given a number sequence, find the minimum number of elements that should be 
deleted to make the remaining sequence sorted.



---TESTCASES---
EXAMPLE1:

INPUT: [4,2,3,6,10,1,12]
OUTPUT: 2, (delete idx 0 and idx 5)


EXAMPLE 2:
INPUT: [3,2,1,0]
OUTPUT: 3, (elements are in reverse order, so we need to delete all except 1 for them to be in ascending sorted)




CONSTRAINTS:
- if no numbers, 0 elements must be deleted to make remaining seq sorted
- if 1 element, return 0 



[0,1,2-1,5]



IDEAS:
- try deleting all combinations of subsequences and checking to see if it makes the remaining sequence sorted in ascending
- if we find the longest increasing subsequence, we can find the min amount of elements we need to remove to make subsequence sorted


- find the longest increasing subsequence
    1. at each step we can make two decisions:
        a. if the current number is > than the previous, add 1 and recursively call on the remaining sequence
        b. if curr number is not greater than previous, skip it and recursively call on the next (are not mutually exclusive (no else statement))
- subtract the longest increasing subsequence from the length of the input array and return it 





COMPLEXITY:
TIME: O(N^2)
SPACE: O(N^2)

*/

function findLISLength(nums) {
    const dp = Array(nums.length).fill(0);
  
    dp[0] = 1;
  
    let maxLength = 1;
    for (let i = 1; i < nums.length; i++) {
      dp[i] = 1;
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j] && dp[i] <= dp[j]) {
          dp[i] = dp[j] + 1;
          maxLength = Math.max(maxLength, dp[i]);
        }
      }
    }
    return maxLength;
}
console.log(findLISLength([4,2,3,6,10,1,12])) // 5
console.log(findLISLength([-4, 10, 3, 7, 15])) // 4