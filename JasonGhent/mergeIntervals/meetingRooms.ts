/*
sort the meeting times by their start time

use a heap that will give us the earliest end time

TIME: O(N LOG N)
SPACE: O(N)

*/
class Heap {
    compare: any
    heap: number[][]
    constructor(compare) {
        this.compare = compare
        this.heap = []
    }
    enqueue(val) {
        this.heap.push(val)
        this.heap.sort(this.compare)
    }
    dequeue() {
        return this.heap.pop()
    }
    peek() {
        return this.heap[this.heap.length - 1]
    }
    size() {
        return this.heap.length
    }
}


function minMeetingRooms(intervals: number[][]): number {
    intervals.sort((a,b) => a[0] - b[0])
    const heap = new Heap((a,b) => b[1] - a[1])
    let minRooms: number = 0;
    // iterate over the intervals 
    // remove from the heap if there is an element and it doesnt conflict with the start time of the current interval
    for (let i: number = 0; i < intervals.length; i++) {
        if (heap.heap.length && heap.peek()[1] <= intervals[i][0]) {
            heap.dequeue()
        }
        heap.enqueue(intervals[i])
        // keep track of the largest size 
        minRooms = Math.max(minRooms, heap.size())
    }
    return minRooms;
};