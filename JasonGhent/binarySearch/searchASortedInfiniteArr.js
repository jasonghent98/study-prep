class Finder {
    constructor(arr) {
        this.arr = arr;
    }
    get(idx) {
        if (idx > this.arr.length - 1) return Infinity;
        return this.arr[idx];
    }
}

const search = (finder, key) => {
    let start = 0;
    let end = 1; 
    // find the upper bound of the array (where the key lies within bounds)
    while (key > finder.get(end)) {
        let newStart = end + 1;
        end += (end-start + 1) * 2; //expand the window exponentially
        start = newStart;
    }
    return binarySearch(finder, start, end, key);
}

const binarySearch = (finder, start, end, key) => { // reg binary search
    while (start <= end) {
        let mid = Math.floor(start + (end-start) / 2);
        if (key < finder.get(mid)) end = mid - 1;
        else if (key > finder.get(mid)) start = mid + 1;
        else return mid; // return the index at which it was found
    }
    return -1; // if not found
}

const finder = new Finder([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30])
console.log(search(finder, 28));

