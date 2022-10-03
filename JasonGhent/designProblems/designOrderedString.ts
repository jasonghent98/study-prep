class OrderedStream {
    values: string[]
    pointer: number
    constructor(n: number) {
        this.values = new Array(n)
        this.pointer = 1 // 1 - n
    }

    
    /** 
     * @param {number} idKey 
     * @param {string} value
     * @return {string[]}
     */
    insert(idKey: number, value: string): string[] {
    this.values[idKey] = value
    const res: string[] = []
        while (this.pointer < this.values.length && this.values[this.pointer]) {
            res.push(this.values[this.pointer++])
        }
        return res
    };
};


const test = new OrderedStream(5)
console.log(test.insert(3, 'ccc')) // []
console.log(test.insert(1, 'aaa')) // ['aaa']
console.log(test.insert(4, 'ddd')) // []
console.log(test.insert(5, 'eee')) // []
console.log(test.insert(2, 'bbb')) // ['bbb', 'ccc', 'ddd', 'eee']

