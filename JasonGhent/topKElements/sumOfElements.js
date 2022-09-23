/* Given an array, find the sum of all numbers between the K1’th and K2’th 
smallest elements of that array. */

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
        this.heap.sort((a,b) => b - a) // smallest element is at end of arr for easy access 
    }
    pop() {
        this.length--;
        return this.heap.pop();
    }
}

const sumOfElements = (nums, k1, k2) => {
    const minHeap = new MinHeap([]);
    nums.forEach(num => { // push each num into our minHeap
        minHeap.push(num);
    });
    // remove the first (smallest) k1 elements from our heap 
    for (let i = 0; i < k1; i++) {
        minHeap.pop();
    }
    // add the values that fall between k1 and k2
    let totalSumBetween = 0;
    for (let i = 0; i < k2 - k1 - 1; i++) {
        totalSumBetween += minHeap.pop();
    }
    return totalSumBetween;
}
console.log(sumOfElements([1, 3, 12, 5, 15, 11], 3, 6)); // 23
console.log(sumOfElements([3, 5, 8, 7], 1, 4)); // 12