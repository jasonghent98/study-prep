/* 
You are given a list of tasks that need to be run, in any order, on a server. Each task will take 
one CPU interval to execute but once a task has finished, it has a cooling period during which it can’t 
be run again. If the cooling period for all tasks is ‘K’ intervals, find the minimum number of CPU intervals
that the server needs to finish all tasks. 

cooling period for all tasks is k intervals 
*/

class MaxHeap {
    constructor(arr) {
        this.heap = arr;
        this.length = 0;
    }
    peek() {
        return this.heap[this.length - 1];
    }
    push(val) {
        this.heap.push(val);
        this.length++;
        this.heap.sort((a,b) => a[0] - b[0]);
    }
    pop() {
        this.length--;
        return this.heap.pop();
    }
}

/* const scheduleTasks = (tasks, k) => {
    let intervalCount = 0;
    const taskFrequency = {};
    tasks.forEach(task => {
        if (!(task in taskFrequency)) taskFrequency[task] = 1;
        else taskFrequency[task] += 1;
    });
    const maxHeap = new MaxHeap([]);
    // process the highest frequency tasks first. if the frequency > 1 when we remove it from heap, place it in waitingList (queue)
    Object.keys(taskFrequency).forEach(task => {maxHeap.push([taskFrequency[task], task])});
    while (maxHeap.heap.length > 0) {
        let waitingList = []; // ds to store tasks that have more than 1 freq and need to be processed again after k elements
        let coolingPeriod = k + 1; // once cooling period reaches 0, push waitlisted tasks back into heap
        while (maxHeap.heap.length > 0 && coolingPeriod > 0) {
            intervalCount++;
            let [frequency, task] = maxHeap.pop();
            if (frequency > 1) waitingList.push([frequency - 1, task]);
            coolingPeriod--;
        }
        // push all of the waitinglist tasks now since cooling period has settled
        waitingList.forEach(task => maxHeap.push(task));
        if (maxHeap.heap.length > 0) { // if there are still items in heap, we need to account for idle spaces
            intervalCount += coolingPeriod;
        }
    }
    return intervalCount;
} */

const scheduleTasks = (tasks, k) => {
    const taskFrequency = {}; // keep track of task frequency
    let intervalCount = 0; // keep track of the intervals
    tasks.forEach(task => {
        if (!(task in taskFrequency)) taskFrequency[task] = 1;
        else taskFrequency[task] += 1;
    });
    const maxHeap = new MaxHeap([]); // keep track of the highest frequency task. process first
    Object.keys(taskFrequency).forEach(task => { 
        maxHeap.push([taskFrequency[task], task]); // push the frequency and task into the max heap
    });
    while (maxHeap.heap.length) {
        let waitList = []; // keep track of tasks that have more than 1 frequency; can only be processed after k intervals
        let coolingPeriod = k + 1; // process k intervals 
        while(maxHeap.heap.length && coolingPeriod > 0) { // process k elements before coolingPeriod can be reset
            intervalCount++; 
            let [frequency, task] = maxHeap.pop(); // destructure
            if (frequency > 1) waitList.push([frequency - 1, task]); // task needs to be processed again
            coolingPeriod--; 
        }
        waitList.forEach(task => maxHeap.push(task));
        if (maxHeap.heap.length) intervalCount += coolingPeriod; // the cpu has to remain idle for the remaining time if wasnt able to process all k + 1 tasks
    }
    return intervalCount;
}
console.log(scheduleTasks(['a', 'a', 'a', 'b', 'c', 'c'], 2));