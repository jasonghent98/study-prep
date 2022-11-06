/*

[3,4,2,7], 8
=> 2

                    l
                          r
target = 7, nums = [2,3,1,2,4,3]
=> 



the case where the sum of all numbers still doesnt eq our target, we should return 0



approach:
    - iterate over the input array and add the nums to a running sum
    - the moment at which our running sum >= target, record the length in a var
    - continually maintain the smallest length that satisfies this condition
    - the length should only be updated if we are >= target


complexity:
    time: o(n)
    space: o(1)

*/


function minSubArrayLen(target: number, nums: number[]): number {
    let minLength: number = Infinity;
    let windowStart: number = 0;
    let currSum: number = 0;
    for (let windowEnd: number = 0; windowEnd < nums.length; windowEnd++) {
        currSum += nums[windowEnd]
        while (currSum >= target) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            currSum -= nums[windowStart];
            windowStart++
        }
    }
    return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(8, [3,2,1,5,3])) // 2