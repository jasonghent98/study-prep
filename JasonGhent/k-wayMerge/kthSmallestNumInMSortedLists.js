// Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.

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

const findKthSmallestElement = (sortedArrays, k) => {
    const minHeap = new Heap([], (a,b) => b[0] - a[0]);
    for (let i = 0; i < sortedArrays.length; i++) {
        minHeap.push([sortedArrays[i][0], 0, sortedArrays[i]]);
    }
    // goal is to find the kth smallest element in all the arrays
    let number;
    while (minHeap.heap.length && k > 0) {
        [number, i, array] = minHeap.pop(); 
        k--;
        if (array.length > i + 1) {
            minHeap.push([array[i+1], i + 1, array]);
        }
    }
    return number;
}

console.log(findKthSmallestElement([[2, 6, 8],[3, 6, 7],[1, 3, 4]], 5)); // 4
console.log(findKthSmallestElement([[5,8,9],[1,7]], 3)); // 7