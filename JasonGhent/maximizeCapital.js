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

function maxCapital (capital, profits, initialCapital, numOfProj) {
    // two heaps: we need quick access to the smallest capital and the largest profit
    const minCapitalHeap = new Heap([], ((a,b) => b[0] - a[0]));
    const maxProfitHeap = new Heap([], ((a,b) => b[0] - a[0]));

    for (let i = 0; i < profits.length; i++) {
        minCapitalHeap.push([capital[i], i]);
    }

    let availableCapital = initialCapital;
    for (let i = 0; i < numOfProj.length; i++) {
        while (minCapitalHeap.length > 0 && minCapitalHeap.peek()[0] <= availableCapital) { // we can keep taking on projects as long as the capital we pull fits within our available capital
            const [capital, index] = minCapitalHeap.pop();
            maxProfitHeap.push([profits[index], index]);
        }

        // break if we cant take on any projects with our given availableCapital
        if (maxProfitHeap.length === 0) break;

        // once we've taken on the project, we can take its profit
        availableCapital += maxProfitHeap.pop[0];
    }
    return availableCapital;
}

console.log(maxCapital([0,1,2], [1,2,3], 1, 2));