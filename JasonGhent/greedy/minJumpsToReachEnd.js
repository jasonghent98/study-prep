/* 
--GREEDY ALGORITHM--


OPTIMAL SOLUTION:
TIME: O(N)
SPACE: O(1)
*/

const minJumps = nums => {
    let left = 0, right = 0, minLength = 0, farthest = 0;
    while (right < nums.length - 1) {
        for (let l = left; l <= right; l++) farthest = Math.max(farthest, nums[l] + l);
        left = right + 1;
        right = farthest;
        minLength++;
    }
    return minLength;
}

console.log(minJumps([2,1,1,1,4])); // 3
console.log(minJumps([1,1,3,6,9,3,0,1,3])); // 4