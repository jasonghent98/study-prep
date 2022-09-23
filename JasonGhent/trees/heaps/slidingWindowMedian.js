/* Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays 
(or windows) of the array. */

class MinHeap {
    constructor(arr) {
        this.heap = arr;
    }
    heapify() {
        this.heap.sort((a,b) => a - b);
    }
    push(val) {
        this.heap.push(val);
        this.heapify();
    }
    poll() {
        this.heap.shift();
        this.heapify();
    }
    peek() {
        return this.heap[0];
    }
} 

function findSlidingWindowMedian (arr, k) {
    const result = new Array(arr.length - k + 1).fill(0.0);
    const minHeap = new MinHeap([...arr]);
    for (let windowEnd = 0; windowEnd < minHeap.length; windowEnd++) {
        this.rebalance_heaps();
  
        if (i - k + 1 >= 0) { // if we have at least 'k' elements in the sliding window
          // add the median to the the result array
          if (this.maxHeap.length === this.minHeap.length) {
            // we have even number of elements, take the average of middle two elements
            result[i - k + 1] = this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
          } else { // because max-heap will have one more element than the min-heap
            result[i - k + 1] = this.maxHeap.peek();
          }
  
          // remove the element going out of the sliding window
          const elementToBeRemoved = nums[i - k + 1];
          if (elementToBeRemoved <= this.maxHeap.peek()) {
            this.maxHeap.delete(elementToBeRemoved); // delete from heap
          } else {
            this.minHeap.delete(elementToBeRemoved); // delete from heap
          }
  
          this.rebalance_heaps();
        }
      }
  
      return result;
    }
  
} 
