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
        this.heap.sort((a,b) => a.compare(b)); // whichever point has the longest total distance from origin (x^2 + y^2) will be sorted in ascending order 
    }
    pop() {
        const val = this.heap.pop();
        this.length--;
        return val;
    }
}

class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // used for max-heap
    compare(other) {
      return this.distance_from_origin() - other.distance_from_origin();
    }
  
    distance_from_origin() {
      // ignoring sqrt to calculate the distance
      return (this.x * this.x) + (this.y * this.y);
    }
  
    print_point() {
      process.stdout.write(`[${this.x}, ${this.y}] `);
    }
  }
  /*
  function find_closest_points(points, k) {
    const maxHeap = new MaxHeap([]);
    // put first 'k' points in the max heap
    for (i = 0; i < k; i++) {
      maxHeap.push(points[i]);
    }
  
    // go through the remaining points of the input array, if a point is closer to the 
    // origin than the top point of the max-heap, remove the top point from heap and add 
    // the point from the input array
    for (i = k; i < points.length; i++) {
      if (points[i].distance_from_origin() < maxHeap.peek().distance_from_origin()) {
        maxHeap.pop();
        maxHeap.push(points[i]);
      }
    }
    // the heap has 'k' points closest to the origin, return them in a list
    return maxHeap.toArray();
  }
  */

  const findClosestPoints = (arr, k) => {
      const maxHeap = new MaxHeap([]);
      for (let i = 0; i < k; i++) maxHeap.push(arr[i]);
      for (let i = k; i < arr.length; i++) { // compare the distances of the current point coordinates with the root of maxHeap
        if (arr[i].distance_from_origin() < maxHeap.peek().distance_from_origin()) {
            maxHeap.pop();
            maxHeap.push(arr[i]);
        }
      }

      return maxHeap.heap.toArray();
  }
  const point1 = new Point(1,2);
  const point2 = new Point(1,3);

  console.log(`The k closest points to the origin are: ${findClosestPoints([point1, point2], 1)}`);