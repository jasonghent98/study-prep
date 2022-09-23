/* Given a staircase with ‘n’ steps and an array of ‘n’ numbers representing the fee that you have to pay if you take the step. 
Implement a method to calculate the minimum fee required to reach the top of the staircase (beyond the top-most step). 
At every step, you have an option to take either 1 step, 2 steps, or 3 steps. You should assume that you are standing at the 
first step. 


---GREEDY ALGO---
TIME: O(N)
SPACE: O(1)
         i
[3,1,3,9]

minCost = 3




*/

const minCost = (nums) => {
    for (let i = 2; i < nums.length; i++) {
        // add the smaller of the two costs from the previous step repeatedly
        nums[i] += Math.min(nums[i-1], nums[i-2]);
    }
    // once we finish, 
    return Math.min(nums[nums.length - 1], nums[nums.length - 2]);
}

console.log(minCost([3,1,2,8])) //3