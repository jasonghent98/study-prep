/* Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array. 
Return the numbers in the sorted order. ‘X’ is not necessarily present in the array. 

since the array is sorted, we can use binary search to find 'X'

Once we find X, we can search in both directions for the k closest numbers to X and store their absolute diff
We will have quick access to the numbers closest to X

we can return the heap at the end once we have placed k elements into our heap

time: O(log n) for binary search; 
*/

class MinHeap {
    constructor(arr) {
        this.heap = arr;
        this.length = 0;
    }
    peek() {
        return this.heap[this.heap.length - 1];
    }
    push(val) {
        this.heap.push(val);
        this.length++;
        this.heap.sort((a,b) => b[0] - a[0]); // will sort by smallest absolute difference from k
    }
    pop() {
        const val = this.heap.pop();
        this.length--;
        return val;
    }
}

const findKClosestElements = (nums, k, target) => {
    let findKIdx = binarySearch(nums, target);
    let maxIdx = Math.min(nums.length - 1, findKIdx + k);
    let minIdx = Math.max(0, findKIdx - k);
    const minHeap = new MinHeap([]);
    for (let i = minIdx; i < maxIdx + 1; i++) {
        minHeap.push([Math.abs(findKIdx - i), nums[i]]); // [absDiff, number];
    }
    const result = [];
    for (let i = 0; i < k; i++) { // retrieve the k closest numbers to target
        result.push(minHeap.pop()[1]);
    }
    result.sort((a,b) => a - b);
    return result;
}

const binarySearch = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] === target) return mid;
        if (target < nums[mid]) end = mid - 1;
        else start = mid + 1;
    }
    return start;
}

console.log(findKClosestElements([2, 4, 5, 6, 9], 3, 10)); // [5,6,9]
console.log(findKClosestElements([5, 6, 7, 8, 9], 3, 7)); // [6,7,8]
console.log(findKClosestElements([1,2,3,4,5], 4, 3)); // [6,7,8]
 