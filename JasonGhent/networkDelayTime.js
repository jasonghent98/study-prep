// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times 
// as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is 
// the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the 
// signal. If it is impossible for all the n nodes to receive the signal, return -1.


const networkDelayTime = function(times, n, k) {
    const distance = new Array(n).fill(Infinity);
    const adList = distance.map(() => []);
    distance[k-1] = 0;
    const heap = new PriorityQueue((a,b) => distance[a] > distance[b]);
    heap.push(k-1);
    for (let i = 0; i<times.length; i++) {
        const source = times[i][0];
        const target = times[i][1];
        const weight = times[i][2];
        adList[source - 1].push([target - 1, weight]);
    }
    while (heap.isEmpty()) {
        const currentVertex = heap.pop();
        const adjacent = adList[currentVertex];
        for (let i = 0; i < adjacent.length; i++) {
            const neighboringVertex = adjacent[i];
            const weight = adjacent[i][1];
            if (distance[currentVertex] + weight < distance[neighboringVertex]) {
                distance[neighboringVertex] = distance[currentVertex] + weight;
                heap.push(neighboringVertex);
            }
        }
    }
    const answer = Math.max(...distance);
    return answer === Infinity ? -1 : answer;
    
};