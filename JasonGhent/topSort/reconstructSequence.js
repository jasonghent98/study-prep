/* 
Given a sequence originalSeq and an array of sequences, write a method to find if originalSeq can be uniquely 
reconstructed from the array of sequences. Unique reconstruction means that we need to find if originalSeq is the only 
sequence such that all sequences in the array are subsequences of it. 

approach:
topological sort bfs traversal of graph

1. init the graph as an adjacency list
2. build the graph with values from each sequence
3. push all of the initial source vertices to a queue to be processed first
4. while the queue has vertices that need to be processed
    check to see if there are more than 2 vertices in our queue, if so , return false
    remove the first node for processing from our queue
    if it doesnt match the corresponding idx for the original seq, return false (needs to be the exact order)
5. check to see if the lengths match
*/

const reconstructSequence = (originalSeq, seqs) => {
    if (seqs.length < 1) return false;

    // init graph
    const graph = {};
    const inDegree = {};
    const sortedOrder = []; // output array to build seq if possible
    seqs.forEach(seq => {
        for (let i = 0; i < seq.length; i++) {
            graph[seq[i]] = []; // adjacency list
            inDegree[seq[i]] = 0;
        }
    });
    // build graph with values from seqs
    seqs.forEach(seq => {
        for (let i = 0; i < seq.length - 1; i++) {
            const parent = seq[i];
            const child = seq[i + 1]
            graph[parent].push(child);
            inDegree[child]++; // we added a new parent to a child
        }
    });
    // init queue with initial source vertices
    const sources = [];
    for (let key in inDegree) {
        if (inDegree[key] === 0) sources.push(parseInt(key));
    }
    // process all vertices in our queue
    while (sources.length) {
        if (sources.length > 1) return false;
        const sourceVertex = sources.shift();
        if (sourceVertex !== originalSeq[sortedOrder.length]) return false;
        sortedOrder.push(sourceVertex);
        graph[sourceVertex].forEach(child => {
            inDegree[child]--;
            if (inDegree[child] === 0) sources.push(child);
        });
    }
    return sortedOrder.length === originalSeq.length;
}
console.log(reconstructSequence([1, 2, 3, 4], [[1, 2], [2, 3], [3, 4]])); // true
console.log(reconstructSequence([1, 2, 3, 4], [[1, 2], [2, 3], [2, 4]])); // false
console.log(reconstructSequence([1, 2, 3, 4], [])); // false