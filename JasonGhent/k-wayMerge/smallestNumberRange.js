/* Given ‘M’ sorted arrays, find the smallest range that includes at 
least one number from each of the ‘M’ lists. 

goal is to find the smallest range that includes a number from 
each list

keep track of the largest number we've placed in minHeap
once smallest number from each array has been placed in mheap
we can process that number and check to see if the currentMax - num gives us a smaller range
if it does we can update our rangeEnd and rangeStart

if there are more elements in the same array that the num came from
push those into our heap

constraints:
    are there negative numbers? will affect the rangeStart val if so

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
    peek() {
        return this.heap[this.heap.length - 1];
    }
    pop() {
        return this.heap.pop();
    }
}


const smallestNumRange = (arrays) => {
    const minHeap = new Heap([], (a,b) => b[0] - a[0]);
    let currentMax = -Infinity;
    let rangeStart = 0
    let rangeEnd = Infinity;
    arrays.forEach(array => {
        minHeap.push([array[0], 0, array]);
    currentMax = Math.max(currentMax, array[0]);
    });
    while (minHeap.heap.length === arrays.length) {
        const [num, i, array] = minHeap.pop();
        if (rangeEnd - rangeStart > currentMax - num) { // update range
            rangeEnd = currentMax;
            rangeStart = num;
        }
        if (i + 1 < array.length) {
            minHeap.push([array[i+1], i+1, array]);
            currentMax = Math.max(currentMax, array[i+1]);
        }
    }
    return [rangeStart, rangeEnd]
}   

console.log(smallestNumRange([[1,5,8], [4,12], [7,8,10]]));