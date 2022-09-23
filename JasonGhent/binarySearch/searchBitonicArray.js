/* 
Given a Bitonic array, find if a given ‘key’ is present in it. An array is 
considered bitonic if it is monotonically increasing and then monotonically 
decreasing. Monotonically increasing or decreasing means that for any index 
i in the array arr[i] != arr[i+1].

Write a function to return the index of the ‘key’. If the 'key' appears more 
than once, return the smaller index. If the ‘key’ is not present, return -1.


constraints:
- there can be duplicates
- return the smallest idx if there are duplicates


ideas:
- binary search
- find the peak element (pt at which values are greater than neighbors)
- once we find the peak, we determine to search left or right depending on target
- determine if left side is increasing or decr




complexity:
time: O(LOG N)
space: O(1)
*/

const searchBitonicArray = (arr, key) => {
    // find the peak element
    const peakElementIdx = findPeakIdx(arr)
    // binary search on left side 
    const keyIdxForLeft = binarySearch(arr, key, 0, peakElementIdx)
    if (keyIdxForLeft !== -1) return keyIdxForLeft // return the smaller idx if found
    const keyIdxForRight = binarySearch(arr, key, peakElementIdx, arr.length - 1)
    return keyIdxForRight
}

const findPeakIdx = (arr) => {
    let left = 0, right = arr.length - 1
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2)
        if (arr[mid] < arr[mid+1]) left = mid + 1
        else right = mid
    }
    return left
}

const binarySearch = (arr, key, left, right) => {
    const isAscending = arr[left] < arr[right]
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)
        if (arr[mid] === key) return mid
        // ascending order
        if (isAscending) {
            if (arr[mid] < key) left = mid + 1
            else right = mid - 1
        } else {
            if (arr[mid] < key) right = mid - 1
            else left = mid + 1
        }
    }
    return -1 // if not found
}

  console.log(searchBitonicArray([1, 3, 8, 4, 3], 4)); // 3
  console.log(searchBitonicArray([1, 3, 8, 12], 12)); // 3
  console.log(searchBitonicArray([3, 8, 3, 1], 8)); // 1
  console.log(searchBitonicArray([10, 9, 8], 11)); // -1
