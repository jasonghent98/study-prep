/* 
Given an unsorted array of integers nums, return the 
length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

TIME: O(N)
SPACE: O(N), for the set
*/

const longestConsecutiveSeq = (nums) => {
    // place all nums in a set: O(N) time and space
    const set = new Set(nums)
    let longestLength = 0
    for (let num of nums) {
        // starting from the smallest number in set
        if (!set.has(num-1)) {
            let currentLength = 1;
            let currentNum = num;
            // 
            while (set.has(currentNum+1)) {
                currentLength++
                currentNum++
            }
            // record the length
            longestLength = Math.max(longestLength, currentLength)
        }
    }
    return longestLength
}

console.log(longestConsecutiveSeq([5,4,3,2,1])) // 5
console.log(longestConsecutiveSeq([100,4,200,1,3,2])) // 4
console.log(longestConsecutiveSeq([55,33])) // 1