const binarySearch = (arr, target) => {
    let leftPtr = 0, rightPtr = arr.length - 1
    // determine if the arr is sorted in ascending or descending
    const isAscending = arr[leftPtr] < arr[rightPtr]
    while (leftPtr <= rightPtr) {
        const midPtr = Math.floor(leftPtr + (rightPtr - leftPtr) / 2)
        if (arr[midPtr] === target) return midPtr
        if (isAscending) {
            if (target < arr[midPtr]) rightPtr = midPtr - 1
            else leftPtr = midPtr + 1
        } else { // if descending
            if (target < arr[midPtr]) leftPtr = midPtr + 1
            else rightPtr = midPtr - 1
        }
    }
    return -1 // if not found
}

console.log(binarySearch([1,2,4,8], 8)); // 3
console.log(binarySearch([9,4,2,1], 2)); // 2