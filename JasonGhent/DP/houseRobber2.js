/* 
Same as house robber1, except that if we steal from the first house, we cant steal from the last

we can slice the array to steal from the first house and skip the last for one possibility, and skip the first and include the last
for another possibility

take the max of these

*/


const houseRobber2 = (nums) => {
    // call the function on 
    return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));
}

const helper = (nums) => {
    let rob1 = 0, rob2 = 0, temp;
    for (let i = 0; i < nums.length; i++) {
        temp = Math.max(nums[i] + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}

console.log(houseRobber2([1,2,3,1])) // 4
console.log(houseRobber2([1,2,3])) // 3