/* Design a class to efficiently find the Kth largest element in a stream of numbers.

The class should have the following two things:

The constructor of the class should accept an integer array containing initial numbers from the stream and an 
integer ‘K’. The class should expose a function add(int num) which will store the given number and return 
the Kth largest number. */
class MinHeap {
    constructor(arr) {
        this.heap = arr;
        this.length = 0;
    }
    push(val) {
        this.heap.push(val);
        this.length++;
        this.heap.sort((a,b) => b - a);
    }
    peek() {
        return this.heap[this.length - 1];
    }
    pop() {
        const val = this.heap.pop();
        this.length--;
        return val;
    }
}

class KthLargestElementInStream {
    constructor(nums, k) {
        this.minHeap = new MinHeap([]);
        this.k = k;
        nums.forEach(num => {
            this.add(num);
        })
    }
    add(num) {
        this.minHeap.push(num);
        if (this.minHeap.length > this.k) {
            this.minHeap.pop();
        }
        return this.minHeap.peek();
    }
}

const example = new KthLargestElementInStream([3, 1, 5, 12, 2, 11], 4);
console.log(example.add(6));
console.log(example.add(13));
console.log(example.add(4));