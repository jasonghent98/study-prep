/* 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.


TESTCASES
EX 1:
INPUTS: [1,2,3,4,1], [1,1]
OUTPUT: [1,1]



CONSTRAINTS:







IDEAS:
- we are searching for the a sequence of similar numbers between the two arrays (doesnt have to be contiguous)
- we can place all of the numbers from nums1 into a set 
- we can filter over the nums2 array and only return the elements that exist in the nums1 array. This will give us the intersection (elements in common)
- we can create a new set object with the numbers returned from filter and spread those numbers into an array




COMPLEXITY:
TIME: O(N * M), where n represents the number of elements in nums1, and M represents the number of elements in nums2
SPACE: O(N * M), where we create two new sets, one for each arr

*/


const findIntersection = (nums1, nums2) => {
    // create a new set with nums1
    const set1 = new Set(nums1);
    return [...new Set(nums2.filter(num => set1.has(num)))];
}

console.log(findIntersection([1,2,3,4,1], [1,1])) // [1]
console.log(findIntersection([1,2,2,1], [2,2])) // [2]