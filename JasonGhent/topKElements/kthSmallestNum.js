/* Given an unsorted array of numbers, find Kth smallest number in it.

Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element. 

approach:

place the first k elements within a max heap
loop over the rest of the array
    if any number is less than the root element, place in the max heap

by the end of the loop, the kth smallest num will be the root element 

time: O(n * k log n), where n is the length of the array. log n is the time it takes to insert an element in a heap. we are
doing that for k elements
*/

class MaxHeap {
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
        this.heap.sort((a,b) => a - b);
    }
    pop() {
        const val = this.heap.pop();
        this.length--;
        return val;
    }
}
// this algo solves for the kth smallest number in ascending order, not the kth distinct element
const findKthSmallestNum = (nums, k) => {
    const maxHeap = new MaxHeap([]);
    for (let i = 0; i < k; i++) maxHeap.push(nums[i]);
    for (let i = k; i < nums.length; i++) {
        if (nums[i] < maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.push(nums[i]);
        }
    }
    return maxHeap.peek();
}

console.log(`The kth smallest number of the set is ${findKthSmallestNum([1, 5, 12, 2, 11, 5], 5)}`)

