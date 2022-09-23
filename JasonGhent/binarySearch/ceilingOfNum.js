/* 
Given an array of numbers sorted in an ascending order, 
find the ceiling of a given number ‘key’. The ceiling of 
the ‘key’ will be the smallest element in the given array 
greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the 
‘key’. If there isn’t any ceiling return -1.

Example 1:
[4,6,10], key = 6 => 1

Ex. 2          m 
               l
           r
          
[1, 3, 8, 10, 15], key = 12 => 4


Ex. 3:
    m
        r
 l
[4, 6, 10], key = 17 (edge case: if greatest num < key) return -1


Ex. 4

    m
    r
       l
[1, 3, 8, 10, 15, 18], key = 5 => 2

constraints:
- sorted array


ideas:


complexity:
time: O(LOG N), bs
space: O(1), only using ptrs to find idx


*/

const ceilingOfNum = (sortedArray, key) => {
    // if last value is < our key, no values that are greater
    if (sortedArray[sortedArray.length - 1] < key) return -1
    // init our ptrs
    let leftPtr = 0, rightPtr = sortedArray.length - 1
    while (leftPtr <= rightPtr) {
        // compute midPtr
        const midPtr = Math.floor(leftPtr + (rightPtr - leftPtr) / 2)
        // if we found key, return idx
        if (sortedArray[midPtr] === key) return midPtr
        else if (sortedArray[midPtr] < key) leftPtr = midPtr + 1
        else rightPtr = midPtr - 1
    }
    return leftPtr // if the key wasnt found, the next num will be the smallest number larger
}


console.log(ceilingOfNum([4,6,10], 6)) // 1
console.log(ceilingOfNum([4, 6, 10], 17)) // -1
console.log(ceilingOfNum([1, 3, 8, 10, 15, 18], 5)) // 2
console.log(ceilingOfNum([4, 6, 10], -1)) // 0
console.log(ceilingOfNum([1, 3, 8, 10, 15], 12)) // 4