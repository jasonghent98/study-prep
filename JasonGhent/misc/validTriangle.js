/*
       i
 s
   e
[2,3,3,4]

ans = 13

          i
       e
 s
[3,19,22,24,67,82,84]



A triangle is valid if:
    - you can take any two sides and add them up to be larger than the 3rd side


approach:
    - if we sort the array, we can sum two numbers and check if they are greater than the 3rd number
    - if yes, we can add all the numbers between the two pointers and move our larger pointer inwards to search for more triplets
    - if no, we increment our smaller pointer to continue to search for triplets


TIME: O(N^2 * N LOG N)
SPACE: O(LOG N), for rec sorting

*/

var triangleNumber = function(nums) {
    nums.sort((a,b) => a - b)
    let ans = 0
    for (let i = nums.length - 1; i >= 2; i--) {
        let start = 0, end = i - 1;
        while (start < end) {
            if (nums[start] + nums[end] > nums[i]) {
    // if this is true, all the numbers between end and start will also be valid
    // so, we add all of these to our ans and move our larger num inwards bc we've already accounted for everything between [start, end]
                ans += end - start
                end--
            } else if (nums[start] + nums[end] <= nums[i]) {
                start++
            }
        }
    }
    return ans;
};


console.log(triangleNumber([3,19,22,24,67,82,84])) // 13
console.log(triangleNumber([2,2,3,4])) // 3