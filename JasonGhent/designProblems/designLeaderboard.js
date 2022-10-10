class Leaderboard {
    constructor() {
        this.scores = {}
    }
    addScore(playerId, score) {
        this.scores[playerId] = this.scores[playerId] + score || score
    }
    top(K) {
        // use a heap
        const heap = new Heap((a,b) => b-a)
        const scores = Object.values(this.scores)
        // iterate over the scores and add to heap while < K
        for (let score of scores) {
            if (heap.size() < K) {
                heap.enqueue(score)
            } else if (heap.peek() < score) { // if we're already at K BUT our current score is larger than the smallest in the heap
                heap.dequeue()
                heap.enqueue(score)
            }
        }
        
        let score = 0
        for (let i = 0; i < heap.heap.length; i++) {
            score += heap.heap[i]
        }
        return score
    }
    reset(playerId) {
        delete this.scores[playerId]
    }
}
    
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
    peek() {
        return this.heap[this.heap.length - 1]
    }
    size() {
        return this.heap.length
    }
}