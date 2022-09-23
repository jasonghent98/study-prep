// const Heap = require('./collections/heap');

class Heap {  // push pop for more efficient access with arrays
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
        this.length = 0;
    }
    peek() {
        return this.heap[this.heap.length - 1];
    }
    push(val) {
        this.heap.push(val);
        this.heap.sort(this.compare);
    }
    pop(){
        return this.heap.pop();
    }
}

/* function maxCapital (capital, profits, initialCapital, numOfProj) {
    // two heaps: we need quick access to the smallest capital and the largest profit
    const minCapitalHeap = new Heap((a,b) => b[0] - a[0]);
    const maxProfitHeap = new Heap((a,b) => a[0] - b[0]);

    for (let i = 0; i < profits.length; i++) {
        minCapitalHeap.push([capital[i], i]);
    }

    let availableCapital = initialCapital;
    for (let i = 0; i < numOfProj; i++) {
        while (minCapitalHeap.heap.length > 0 && minCapitalHeap.peek()[0] <= availableCapital) { // we can keep taking on projects as long as the capital we pull fits within our available capital
            const [capital, index] = minCapitalHeap.pop();
            maxProfitHeap.push([profits[index], index]);
        }

        // break if we cant take on any projects with our given availableCapital
        if (maxProfitHeap.heap.length === 0) break;

        // once we've taken on the project, we can take its profit
        availableCapital += maxProfitHeap.pop()[0];
    }
    return availableCapital;
}

console.log(maxCapital([0,1,2], [1,2,3], 1, 2)); */


// the current capital that you hold corresponds to the highest index project you can take for profit
function maxCapital (capital, profits, initialCapital, numOfProj) {
    // minHeap for capital (least capital); maxHeap for profit(highest profit)
    const minHeapCapital = new Heap((a,b) => b[0] - a[0]);
    const maxHeapProfit = new Heap((a,b) => a[0] - b[0]);

    for (let i = 0; i < capital.length; i++) {
        minHeapCapital.push([capital[i], i]); // push the capital and its corresponding index onto the heap
    }

    let availableCapital = initialCapital;
    for (let i = 0; i < numOfProj; i++) { // we are bound to the number of projects we can select to maximize our capital
        while (minHeapCapital.heap.length > 0 && minHeapCapital.peek()[0] <= availableCapital) { // keep taking on projects as long as the capital fits within our current capital
            const [capital, index] = minHeapCapital.pop(); // remove the project if we can afford it 
            maxHeapProfit.push([profits[index], index]);

        }
        // break if we can't take on any projects (we cant add them to our maxProfitHeap)
        if (maxHeapProfit.heap.length === 0) break;

        availableCapital += maxHeapProfit.pop()[0]; // add the profit to our available capital
    }
    return availableCapital;
}

console.log(maxCapital([0,1,1], [1,2,3], 0, 2)); 
