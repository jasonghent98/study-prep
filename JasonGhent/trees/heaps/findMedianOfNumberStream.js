/* Design a class to calculate the median of a number stream. The class should have the following 
two methods:

insertNum(int num): stores the number in the class
findMedian(): returns the median of all numbers inserted in the class
If the count of numbers inserted in the class is even, the median will be the average of the 
middle two numbers.
 */

class MinHeap {
    constructor(arr){
      this.heap = arr;
    }
    heapify() {
      this.heap.sort((a,b) => a-b);
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
class MaxHeap {
  constructor(arr){
    this.heap = arr;
  }
  heapify() {
    this.heap.sort((a,b) => b-a);
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

  
  
  class MedianOfAStream {
    constructor() {
      this.maxHeap = new MaxHeap([]); // containing first half
      this.minHeap = new MinHeap([]); // containing second half
    }
  
    insertNum(num) {
      if (this.maxHeap.heap.length === 0 || this.maxHeap.peek() >= num) {
        this.maxHeap.push(num);
      } else {
        this.minHeap.push(num);
      }
  
      // either both the heaps will have equal number of elements or max-heap will have one
      // more element than the min-heap
      if (this.maxHeap.heap.length > this.minHeap.heap.length + 1) {
        this.minHeap.push(this.maxHeap.poll());
      } else if (this.maxHeap.heap.length < this.minHeap.heap.length) {
        this.maxHeap.push(this.minHeap.poll());
      }
      return;
    }
  
    findMedian() {
      if (this.maxHeap.heap.length === this.minHeap.heap.length) {
        // we have even number of elements, take the average of middle two elements
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
      }
  
      // because max-heap will have one more element than the min-heap
      return this.maxHeap.peek();
    }
  }
  
  
  /*
  stream = [4,2,7,8,6,5]
  
  minHeap = [2,4,5,6,7,8]
  
  insertNum(5) -> [2,4,5,6,7,8]
  findMedian -> 5.5
  
  */
  const stream = new MedianOfAStream();
  console.log(stream.insertNum(4))
  console.log(stream.insertNum(2))
  console.log(stream.insertNum(7))
  console.log(stream.insertNum(8))
  console.log(stream.insertNum(6))
  console.log(stream.insertNum(5))
  
  console.log(stream);
  console.log(stream.findMedian());