/* Given two sorted arrays in descending order, find ‘K’ pairs with 
the largest sum where each pair consists of numbers from both the 
arrays. 



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

const pairsWithLargestSums = (nums1, nums2, k) => {
    const minHeap = new Heap([], (a,b) => b[0] - a[0]);
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        for (let j = 0; j < Math.min(nums2.length, k); j++) {
            if (minHeap.heap.length < k) {
                minHeap.push([nums1[i] + nums2[j], i, j]);
            } else {
                if (nums1[i] + nums2[j] < minHeap.peek()[0]) break;
                else {
                    minHeap.pop();
                    minHeap.push([nums1[i] + nums2[j], i, j]);
                } 
            }
        }
    }
    const result = [];
    minHeap.heap.forEach(pair => {
        result.push([nums1[pair[1]], nums2[pair[2]]]);
    });
    return result;
}

console.log(pairsWithLargestSums([9, 8, 2], [6, 3, 1], 3)); // [9,3], [9,6], [8,6]