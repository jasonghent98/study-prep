  /* 
  Given an array of numbers which is sorted in ascending order and 
  is rotated ‘k’ times around a pivot, find ‘k’.

  You can assume that the array does not have any duplicates.
  

  constraints:
    - does it rotate right or left
    - no duplicates

  ideas:
    - find the pivot idx (pt which is smaller than its neighbors)
    - return the idx


  complexity:
  time: O(LOG N)
  space: O(1)
  */

const rotationCount = arr => {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)
        const isIncreasing = arr[left] < arr[mid]
        if (arr[mid] > arr[mid+1]) return mid + 1
        else if (arr[mid] < arr[mid-1]) return mid
        else if (isIncreasing) left = mid + 1
        else right = mid - 1
    }
    return 0
}

  console.log(rotationCount([1, 3, 8, 10])) // 0
  console.log(rotationCount([4,5,7,9,10,-1,2])) // 5
  console.log(rotationCount([10, 15, 1, 3, 8])) // 2