const criticalConnections = (n, connections) => {
    // init graph
    const graph = {};
    for (let i = 0; i < n; i++) graph[i] = []; // adjacency list
    for (let [a,b] of connections) { // construct undirected graph
        graph[a].push(b);
        graph[b].push(a);
    }
    // keep track of discovered nodes and 
    let discovered = new Uint32Array(n), low = new Uint32Array(n), time = 1, ans = [];
    const dfs = (current, previous) => {
        discovered[current] = low[current] = time++;
        for (let next of graph[current]) {
            if (!discovered[next]) {
                dfs(next, current);
                low[current] = Math.min(low[current], low[next]);
            } else if (next !== previous) {
                low[current] = Math.min(low[current], discovered[next]);
            }
            if (low[next] > discovered[current]) ans.push([current, next]);
        }
    }
    dfs(0, -1);
    return ans;
}

console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]));
console.log(criticalConnections(2, [[0,1]]));