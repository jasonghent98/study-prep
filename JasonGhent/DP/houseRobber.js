/* You are a professional robber planning to rob houses along a street. Each house has a certain amount of money 
stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems 
connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money
 you can rob tonight without alerting the police. 
 

 DP problem
 
 */


const houseRobber = (nums) => {
    let rob1 = 0, rob2 = 0, temp;
    for (let i = 0; i < nums.length; i++) {
        let temp = Math.max(nums[i] + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}

console.log(houseRobber([1,2,3,1])) // 4
console.log(houseRobber([2,7,9,3,1])) // 12