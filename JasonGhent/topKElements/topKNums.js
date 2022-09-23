/* 
Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

approach:
place the first k elements in the minHeap
after, loop over the remainder of the array 
    if the current element is greater than the val at the root, pop the root and replace val with the current element
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
        this.heap.sort((a,b) => b - a); // sort in descending order for quick push/pop access
    }
    pop() {
        const val = this.heap.pop();
        this.length--;
        return val;
    }
}

const topKElements = (arr, k) => {
    const minHeap = new MinHeap([]);
    for (let i = 0; i < k; i++) minHeap.push(arr[i]);
    for (let i = k; i < arr.length; i++) {
        if (arr[i] > minHeap.peek()) {
            minHeap.pop();
            minHeap.push(arr[i]);
        }
    }
    return minHeap.heap;
}

console.log(`Here are the top k nummbers: ${topKElements([3, 1, 5, 12, 2, 11], 3)}`);