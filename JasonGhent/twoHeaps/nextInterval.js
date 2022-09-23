/* 

Ex. 1:

Input: Intervals [[2,3], [3,4], [5,6]]
Output: [1, 2, -1]


maxStartHeap = [2,0]
maxEndHeap =  [3,0] 


s: [3,1]

e: [3,0]


output: [1 ,2,-1]








Ex. 2:

Input: [[3,4], [1,5], [4,6]]

maxEndHeap = []

maxStartHeap = [[4,2],[3,0],[1,1]]

** the order of the end time matters here

e: [4,0]

Output: [2, -1, -1]




Given an array of intervals, find the next interval of each interval. In a list of intervals, 
for an interval ‘i’ its next interval ‘j’ will have the smallest ‘start’ greater than or equal to 
the ‘end’ of ‘i’.

Write a function to return an array containing indices of the next interval of each input interval. 
If there is no next interval of a given interval, return -1. It is given that none of the intervals 
have the same start point.




constraints



approach

BRUTE FORCE:
- we can sort the input intervals by their end time
- iterate over the remaining of the intervals and find the first interval.start >= the current interval.end 

OPTIMALLY:
- instatiate a min end heap and a max start heap

complexity
time: O(N LOG N) to place all elements into our heaps
space: O(N), to store the greatest start and end times in our heaps

*/

class Heap {
    constructor(compare) {
        this.heap = []
        this.compare = compare

    }
    enqueue(val) {
        this.heap.push(val)
        this.heap.sort(this.compare)
    }
    dequeue() {
        return this.heap.pop()
    }
    front() {
        return this.heap[this.heap.length - 1]
    }
    size() {
        return this.heap.length
    }
}



const nextInterval = (intervals) => {
    // init an output arr to the same length of intervals, bc we know that each interval will have a val assigned to it
    const nextIntervalForEachInterval = new Array(intervals.length).fill(-1) // can be init to -1
    // init our heaps
    const maxEndHeap = new Heap((a,b) => a.end - b.end)
    const maxStartHeap = new Heap((a,b) => a.start - b.start)

    // iterate over our intervals and place each interval in both our max and min heap
    for (let i = 0; i < intervals.length; i++) {
        // grab the current interval
        const [start, end] = intervals[i]
        // enqueue each value with the idx at which it belongs
        maxEndHeap.enqueue([end, i])
        maxStartHeap.enqueue([start, i])
    }
    // find the next interval for each interval
    while (maxEndHeap.size()) {
        // process the element that ends the latest from the maxEnd Heap
        const [end, endIdx] = maxEndHeap.dequeue()
        // if there is an element in max heap and it is >= our curr end
        if (maxStartHeap.size() && maxStartHeap.front()[0] >= end) {
            let [start, startIdx] = maxStartHeap.dequeue()
            // we want the smallest larger element than our end
            while (maxStartHeap.size() && maxStartHeap.front()[0] >= end) {
                [start, startIdx] = maxStartHeap.dequeue()
            }
            // set the idx of this smallest larger start to the current end idx
            nextIntervalForEachInterval[endIdx] = startIdx
            // dont forget to add the smallest larger start back to the maxStart heap, as it could be the answer for another interval
            maxStartHeap.enqueue([start, startIdx])
        }
    }
    return nextIntervalForEachInterval
}



console.log(nextInterval([[2,3], [3,4], [5,6]])) // [1, 2, -1]
console.log(nextInterval([[3,4], [1,5], [4,6]])) // [2,-1,-1]