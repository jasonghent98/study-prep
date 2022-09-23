
/* 
Ex. 1

 m
r
 l
[4, 6, 10], key = 3
=> 4
(edge case: if the key is < smallest element)
(edge case: if key > greatest element)

constraints:
- what are the constraints on the length of the array


ideas:
- search for the key in the array
- if we find it, return the element
- if we dont find it in the array and its within the range, return the smallest different between the left and right ptr


complexity:
time: O(LOG N)
space: O(1)
*/

const minDiffElement = (nums, key) => {
    // if out of bounds
    if (key < nums[0]) return nums[0]
    if (key > nums[nums.length - 1]) return nums[nums.length - 1]
    let leftPtr = 0, rightPtr = nums.length - 1
    while (leftPtr <= rightPtr) {
        const midPtr = Math.floor(leftPtr + (rightPtr - leftPtr) / 2)
        if (key === nums[midPtr]) return nums[midPtr]
        else if (key < nums[midPtr]) rightPtr = midPtr - 1
        else leftPtr = midPtr + 1
    }
    // if we exit without returning, means the target is within range but wasnt found
    // take the smallest difference between left and right
    const left = Math.abs(nums[rightPtr] - key)
    const right = Math.abs(nums[leftPtr] - key)
    if (left < right) return nums[rightPtr]
    return nums[leftPtr]
}

console.log(minDiffElement([4, 6, 10], 7)) // 6
console.log(minDiffElement([4, 6, 10], 4)) // 4
console.log(minDiffElement([1, 4, 8, 10, 15], 2)) // 1


https://leetcode.com/subscribe/?next=/explore/interview/card/amazon