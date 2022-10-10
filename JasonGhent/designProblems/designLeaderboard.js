class Leaderboard {
    constructor() {
        this.hash = {};
    }
    addScore(playerId, score) {
        this.hash[playerId] ? this.hash[playerId] += score : this.hash[playerId] = score;
    }
    
    reset(playerId) {
        delete this.hash[playerId];
    }
    
    top(k) {
        const minHeap = new Heap()
        let scores = Object.values(this.hash);
        for(const score of scores) {
            if(minHeap.size < k) {
                minHeap.add(score)
            } else if(minHeap.peek() < score) {
                minHeap.remove()
                minHeap.add(score)
            }
        }
        let sum = 0;
        for(let i = 0; i < minHeap.array.length; i++) {
            let curr = minHeap.array[i];
            sum += curr;
        }
        
        return sum;
        // return minHeap.array.reduce((sum, curr) => sum + curr)
    }
}
    
class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.array = []
    this.comparator = (i1, i2) => {
      const value = comparator(this.array[i1], this.array[i2])
      if (Number.isNaN(value)) {
        throw new Error(
          `Comparator should evaluate to a number. Got ${value} when comparing ${this.array[i1]} with ${this.array[i2]}`
        )
      }
      return value
    }
  }

  add(value) {
    this.array.push(value)
    this.bubbleUp()
  }
  peek() {
    return this.array[0]
  }
  remove(index = 0) {
    if (!this.size) return null
    this.swap(index, this.size - 1) // swap with last
    const value = this.array.pop() // remove element
    this.bubbleDown(index)
    return value
  }
  size() {
    return this.array.length
  }
  bubbleUp() {
    let index = this.size - 1
    const parent = (i) => Math.ceil(i / 2 - 1)
    while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
      this.swap(parent(index), index)
      index = parent(index)
    }
  }
  bubbleDown(index = 0) {
    let curr = index
    const left = (i) => 2 * i + 1
    const right = (i) => 2 * i + 2
    const getTopChild = (i) =>
      right(i) < this.size && this.comparator(left(i), right(i)) > 0
        ? right(i)
        : left(i)

    while (
      left(curr) < this.size &&
      this.comparator(curr, getTopChild(curr)) > 0
    ) {
      const next = getTopChild(curr)
      this.swap(curr, next)
      curr = next
    }
  }
  swap(i1, i2) {
    ;[this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]]
  }
}