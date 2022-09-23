
class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}


const cloneGraph = (node) => {
    if (!node) return null;
    const oldToNew = {};
    const dfs = (node) => {
        if (node.val in oldToNew) return oldToNew[node.val];
        const clone = new Node(node.val);
        oldToNew[node.val] = clone;
        for (let nei of node.neighbors) clone.neighbors.push(dfs(nei));
        return clone;
    }
    return dfs(node);
}
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.neighbors.push(node3, node4);
node2.neighbors.push(node3, node4);
node3.neighbors.push(node1, node2);
node4.neighbors.push(node1, node2);

console.log(cloneGraph(node1))