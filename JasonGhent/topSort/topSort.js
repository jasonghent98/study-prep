/* Topological Sort of a directed graph (a graph with unidirectional edges) is a linear ordering of its v
ertices such that for every directed edge (U, V) from vertex U to vertex V, U comes before V in the ordering.

Given a directed graph, find the topological ordering of its vertices. 
*/

const topologicalSort = (vertices, edges) => {
        const sortedOrder = [];
        if (vertices <= 0) {
          return sortedOrder;
        }
      
        // a. Initialize the graph
        const inDegree = {};
        for (let i = 0; i < vertices; i++) {
            inDegree[i] = 0;
        }
        const graph = {};
        for (let i = 0; i < vertices; i++) {
            graph[i] = [];
        }
      
        // b. Build the graph
        edges.forEach((edge) => {
          let parent = edge[0],
            child = edge[1];
          graph[parent].push(child); // put the child into it's parent's list
          inDegree[child]++; // increment child's inDegree
        });
      
        // c. Find all sources i.e., all vertices with 0 in-degrees
        const sources = []; // deque
        for (i = 0; i < Object.keys(inDegree).length; i++) {
          if (inDegree[i] === 0) {
            sources.push(i);
          }
        }
      
        // d. For each source, add it to the sortedOrder and subtract one from all of its 
        // children's in-degrees if a child's in-degree becomes zero, add it to sources queue
        while (sources.length > 0) {
          const vertex = sources.shift();
          sortedOrder.push(vertex);
         // get the node's children to decrement their in-degrees
          graph[vertex].forEach((child) => {
            inDegree[child] -= 1;
            if (inDegree[child] === 0) {
              sources.push(child);
            }
          });
        }
      
        // topological sort is not possible as the graph has a cycle
        if (sortedOrder.length !== vertices) {
          return [];
        }
      
        return sortedOrder;
}
      

      console.log(`Topological sort: ${
        topologicalSort(4, [
          [3, 2],
          [3, 0],
          [2, 0],
          [2, 1],
        ])}`); // 3,2,0,1
      
      console.log(`Topological sort: ${
        topologicalSort(5, [
          [4, 2],
          [4, 3],
          [2, 0],
          [2, 1],
          [3, 1],
        ])}`); // 4,2,3,0,1

      console.log(`Topological sort: ${
        topologicalSort(7, [
          [6, 4],
          [6, 2],
          [5, 3],
          [5, 4],
          [3, 0],
          [3, 1],
          [3, 2],
          [4, 1],
        ])}`); // 5,6,3,4,0,2,1