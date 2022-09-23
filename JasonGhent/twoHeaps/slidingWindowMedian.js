/* 
time: O(n * k) to iterate over each element in the nums array. Heap in best practice would add and remove elements in log(n) time 
space: O(n) to store values in both min and max heap
 */

class Heap {
    constructor(comparator) {
        this.heap = [];
        this.length = 0;
        this.comparator = comparator;
    }
    peek() {
       return this.heap[this.heap.length - 1];
    }
    push(val) {
        this.heap.push(val);
        this.heap.sort(this.comparator);
    }
    pop() {
        const val = this.heap.pop();
        this.length--;
        return val;
    }
}
const medianSlidingWindow = (nums, k) => {
    // init a min and max heap
    const minHeap = new Heap((a,b) => b - a);
    const maxHeap = new Heap((a,b) => a - b);
    const medianArray = [];
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        if (maxHeap.heap.length === 0 || nums[windowEnd] <= maxHeap.peek()) {
            maxHeap.push(nums[windowEnd]);
        } else minHeap.push(nums[windowEnd]);
        
        // rebalance if necessary
        if (maxHeap.heap.length > minHeap.heap.length + 1) {
            minHeap.push(maxHeap.pop());
        } else if (maxHeap.heap.length < minHeap.heap.length) maxHeap.push(minHeap.pop());
        
        // have we reached our window length?
        if (windowEnd - k + 1 >= 0) {
            // calculate mean first. are we dealing with an even or odd length?
            if (maxHeap.heap.length === minHeap.heap.length) {
                const median = (maxHeap.peek() + minHeap.peek()) / 2;
                medianArray.push(median);
            } else medianArray.push(maxHeap.peek());
            
            // remove the start sliding window element from the heap it belongs to
            const windowStart = nums[windowEnd - k + 1];
            if (windowStart <= maxHeap.peek()) {
                const idx = maxHeap.heap.indexOf(windowStart);
                maxHeap.heap.splice(idx, 1);
            } else {
                const idx = minHeap.heap.indexOf(windowStart);  
                minHeap.heap.splice(idx, 1);
            }
            
            // rebalance heaps as necessary after splicing
            if (maxHeap.heap.length > minHeap.heap.length + 1) minHeap.push(maxHeap.pop());
            else if (maxHeap.heap.length < minHeap.heap.length) maxHeap.push(minHeap.pop());
        }
    }
    return medianArray;
}

console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
