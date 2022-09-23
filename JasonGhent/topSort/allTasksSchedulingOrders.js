/* There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks which need to 
be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, write 
a method to print all possible ordering of tasks meeting all prerequisites. 

approach:
    - topological sort 
    - recursion can be used to backtrack and create all possible combinations
    - base case will include printing the sort if there is no cycle
*/
/* 
const allPossibleTasks = (tasks, prerecs) => {
    if (tasks < 1) return []; // edge case
    const sortedOrder = [];
    const graph = {}; // adjacency list
    const inDegree = {}; // keep track of the amount of incoming connections a vertex has
    // init graph
    for (let i = 0; i < tasks; i++) {
        graph[i] = [];
        inDegree[i] = 0;
    }
    // build the graph
    prerecs.forEach(prerec => {
        const parentNode = prerec[0];
        const childNode = prerec[1];
        graph[parentNode].push(childNode);
        inDegree[childNode]++;
    });
    // process all of the source nodes into the queue
    const queue = [];
    // Object.keys(inDegree).forEach(task => {
    //     if (inDegree[task] === 0) queue.push(task);
    // });
    for (let i = 0; i < Object.keys(inDegree).length; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    // recursive call to find all possible permutations of valid top sorts
    findValidPermutations(graph, inDegree, queue, sortedOrder);
}
const findValidPermutations = (graph, inDegree, queue, sortedOrder) => {
    if (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            const currentSource = queue[i]; // grab current source
            sortedOrder.push(currentSource); // place in sortedOrder arr
            const sourceForNextCall = queue.slice(); // clone the copy
            sourceForNextCall.splice(sourceForNextCall.indexOf(currentSource), 1); // remove the current source from the next source
            graph[currentSource].forEach(child => { // get the source's children to decrement their inDegrees
                inDegree[child]--;
                if (inDegree[child] === 0) sourceForNextCall.push(child);
            });
            findValidPermutations(graph, inDegree, sourceForNextCall, sortedOrder); // recursive call to continually remove the currentSource
            // backtrack by removing the most recently added source to the source for next call
            sortedOrder.splice(sortedOrder.indexOf(currentSource), 1);
            graph[currentSource].forEach(child => {
                inDegree[graph[child]] += 1
            })

        }
    }
    if (sortedOrder.length === Object.keys(inDegree).length) return console.log(sortedOrder); // base case
}
 */

const allPossibleTasks = (tasks, prerecs) => {
    const sortedOrder = [];
    if (tasks < 1) return sortedOrder;
    // init graph
    const graph = {};
    const inDegree = {};
    for (let i = 0; i < tasks; i++) {
        graph[i] = [];
        inDegree[i] = 0;
    }
    // build graph
    prerecs.forEach(prerec => {
        const parent = prerec[0];
        const child = prerec[1];
        graph[parent].push(child);
        inDegree[child]++;
    });

    // process the first set of sources
    const sources = [];
    for (let i = 0; i < Object.keys(inDegree).length; i++) {
        if (inDegree[i] === 0) sources.push(i); // if the current value for a vertex is 0, push it as a source
    }
    findAllTasksRecursive(graph, inDegree, sources, sortedOrder);
}

const findAllTasksRecursive = (graph, inDegree, sources, sortedOrder) => {
    if (sources.length) {
        for (let i = 0; i < sources.length; i++) {
            const source = sources[i]; // process the first source
            sortedOrder.push(source); // push onto the bfs array
            // clone the existing queue. it needs to be modified to not have the source for our recursive call
            const cloneSources = sources.slice();
            cloneSources.splice(cloneSources.indexOf(source), 1);
            graph[source].forEach(child => { // decrement the indegree value for all of the source's children
                inDegree[child]--;
                if (inDegree[child] === 0) cloneSources.push(child);
            });
            findAllTasksRecursive(graph, inDegree, cloneSources, sortedOrder); // recursively process each source until our sortedarray === inDegree length
            // backtrack once the recursive call returns
            sortedOrder.splice(sortedOrder.indexOf(source), 1); // remove it from the array
            for (let child = 0; child < graph[source].length; child++) {
                inDegree[graph[source][child]]++;
            }
        }
    }
    if (sortedOrder.length === Object.keys(inDegree).length) console.log(sortedOrder);
}
console.log(allPossibleTasks(4, [[3, 2], [3, 0], [2, 0], [2, 1]]));