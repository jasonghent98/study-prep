/* Given an N * N matrix where each row and column is sorted in 
ascending order, find the Kth smallest element in the matrix. 

use a minHeap to store all of the smallest values from each array
as long as there is a value in the minheap and k > 0
    remove the root item
    decrement k
    if there are still items that need to be processed from array
    add them
repeat until we have processed k elements
return the number

time:
space:
*/

class Heap {
    constructor(arr, comparator) {
        this.heap = arr;
        this.comparator = comparator;
    }
    push(val) {
        this.heap.push(val);
        this.heap.sort(this.comparator);
    }
    pop() {
        return this.heap.pop();
    }
    peek() {
        return this.heap[this.heap.length - 1];
    }
}

const findKthSmallestElementInMatrix = (matrix, k) => {
    const minHeap = new Heap([], (a,b) => b[0] - a[0]); // sort by smallest number
    for (let i = 0; i < matrix.length; i++) {
        minHeap.push([matrix[i][0], 0, matrix[i]]);
    }
    let number;
    while (minHeap.heap.length && k > 0) {
        [number, i, matrix] = minHeap.pop();
        k--;
        if (matrix.length > i + 1) minHeap.push([matrix[i+1], i+1, matrix]);
    }
    return number;
}

console.log(findKthSmallestElementInMatrix([[2,6,8], [3,7,10], [5,8,11]], 5)); // 7