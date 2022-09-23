 /*
You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] 
indicates that there is an undirected edge between nodes ai and bi in the graph.
Return true if the edges of the given graph make up a valid tree, and false otherwise.





notes:
 a tree is a special type of unidirectional graph where the nodes have parent-child relationships
 trees cannot have cycles or cannot be disjoint
 we can use a hashmap to keep track of the nodes we've visited and if we encounter that node again, false
 after traversing the entire tree, return true if we never returned false

 TIME: O(V+E), to visit each vertex and edge once
 SPACE: O(V+E), for call stack
 */
const validTree = (n, edges) => {
    if (!n) return true; // edge case
    // init graph adjacency list
    const graph = {};
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    // build graph from edges
    for (let [a,b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    // keep track of visited nodes. graph cannot contain cycles or multiple components (disjoint)
    const visited = new Set();
    // will check if is valid tree
    const isTreeRecursive = (current, previous) => {
        if (visited.has(current)) return false; // contains cycle
        visited.add(current);
        // loop over neighbors
        for (let i = 0; i < graph[current].length; i++) {
            if (graph[current][i] === previous) continue; // undirected graph, already saw previous
            if (!(isTreeRecursive(graph[current][i], current))) return false; // contains cycle
        }
        return true; // if there is no cycle after dfs of graph
    }
    return isTreeRecursive(0, -1) && visited.size === n; // if no cycle and not disjoint
}