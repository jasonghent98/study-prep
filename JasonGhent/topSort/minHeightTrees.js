/* We are given an undirected graph that has characteristics of a k-ary tree. In such a graph, we can choose any 
node as the root to make a k-ary tree. The root (or the tree) with the minimum height will be called Minimum Height 
Tree (MHT). There can be multiple MHTs for a graph. In this problem, we need to find all those roots which give us MHTs. 
Write a method to find all MHTs of the given graph and return a list of their roots. 

need to find all possible valid orderings for a k-ary tree.

inputs => undirected graph
output => the root node of all min height trees that can be generated in an output array

approach:
topological sort
init an output array (this will hold all possible combos of graph traversals)
1. init our graph
2. build our graph
3. place all of the vertices with indegree vals of 0 into sources queue
4. recursively process all of the vertices in the queue (base case -> if graphCombo === number of vertices in inDegree map) ->  push onto our sortedOrder result array

5. once we finish processing all of the possible combos recursively...
6. iterate over our output array and find the roots with shortest length. return only those nodes


how will we find the traversals with the shortest length? 

constraints:
    is the height determined by the number of edges from root to leaf/sink?
*/

const minHeightTrees = (nodes, edges) => {
    // edge cases
    if (nodes < 1) return [];
    if (nodes === 1) return [0];
    //init the graph
    const graph = {};
    const inDegree = {}; // keep track of count of incoming connnections for each vertex
    for (let i = 0; i < nodes; i++) {
        graph[i] = [];
        inDegree[i] = 0;        
    }
    // build the graph
    edges.forEach(edge => {
        const v1 = edge[0];
        const v2 = edge[1];
        graph[v1].push(v2);
        graph[v2].push(v1);
        inDegree[v1]++;
        inDegree[v2]++;
    });

    // init source queue with leaf nodes. queue helps to process the graph in a BFS approach, which will give us the roots with smallest height
    const leafSources = [];
    for (let vertex in inDegree) {
        if (inDegree[vertex] === 1) leafSources.push(vertex);
    }

    // process all of the leaf nodes, then place all of the next set of leaf nodes in queue, until we reach roots
    let totalNodes = nodes;
    while (totalNodes > 2) {
        const leafLevelLength = leafSources.length;
        totalNodes -= leafLevelLength;
        for (let i = 0; i < leafLevelLength; i++) {
            const leaf = leafSources.shift();
            graph[leaf].forEach(child => {
                inDegree[child]--;
                if (inDegree[child] === 1) leafSources.push(child);
            });
        }
    }
    return leafSources;
}

console.log(minHeightTrees(5, [[0, 1], [1, 2], [1, 3], [2, 4]]));
console.log(minHeightTrees(4, [[0, 1],[0, 2],[2, 3]]));
console.log(minHeightTrees(4, [[0, 1], [1, 2], [1, 3]]));